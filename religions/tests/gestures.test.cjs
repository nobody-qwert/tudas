const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const gestures = script.slice(script.indexOf('let dragging=false,'), script.indexOf("svg.addEventListener('wheel'"));

function setup() {
  const handlers = new Map(), classes = new Set();
  let selected = 'previous', transforms = 0;
  const svg = {
    addEventListener: (type, handler) => handlers.set(type, handler),
    setPointerCapture() {}, releasePointerCapture() {},
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 1200, height: 800 }),
    classList: { add: name => classes.add(name), remove: name => classes.delete(name) },
    closest: () => null
  };
  const context = vm.createContext({
    svg, branchAxis: { addEventListener() {} }, scale: 0.5, tx: 0, ty: 0,
    boundedScale: value => Math.max(0.1, Math.min(2.2, value)),
    applyTransform: () => transforms++,
    selectNode: id => { selected = id; },
    clearSelection: () => { selected = null; },
    closeHelp() {}, updateFilters() {}
  });
  vm.runInContext(gestures, context);
  const box = { dataset: { id: 'box' }, closest: selector => selector === '.node' ? box : null };
  const edge = { closest: selector => selector === '.edge' ? edge : null };
  return {
    svg, box, edge,
    fire(type, x, y, options = {}) {
      handlers.get(type)({ type, clientX: x, clientY: y, pointerId: 1, pointerType: 'mouse', button: 0, target: svg, ...options });
    },
    state() {
      return { selected, transforms, cursor: classes.has('dragging'),
        ...vm.runInContext('({tx,ty,scale,pointers:activePointers.size,dragging})', context) };
    }
  };
}

test('Pressing a box does not select it until release', () => {
  const app = setup();
  app.fire('pointerdown', 100, 100, { target: app.box });
  assert.equal(app.state().selected, 'previous');
  app.fire('pointermove', 103, 102);
  assert.equal(app.state().transforms, 0);
  app.fire('pointerup', 103, 102);
  assert.equal(app.state().selected, 'box');
  assert.equal(app.state().cursor, false);
});

test('Dragging from a box keeps the existing selection', () => {
  const app = setup();
  app.fire('pointerdown', 100, 100, { target: app.box });
  app.fire('pointermove', 140, 125);
  assert.equal(app.state().tx, 40);
  assert.equal(app.state().ty, 25);
  assert.equal(app.state().cursor, true);
  app.fire('pointerup', 140, 125);
  assert.equal(app.state().selected, 'previous');
  assert.equal(app.state().cursor, false);
});

test('Dragging away and back to the start is not a tap', () => {
  const app = setup();
  app.fire('pointerdown', 100, 100, { target: app.box });
  app.fire('pointermove', 120, 100);
  app.fire('pointermove', 100, 100);
  app.fire('pointerup', 100, 100);
  assert.equal(app.state().selected, 'previous');
});

test('Touch allows small movement before a drag starts', () => {
  for (const distance of [9, 11]) {
    const app = setup(), touch = { pointerType: 'touch' };
    app.fire('pointerdown', 100, 100, { ...touch, target: app.box });
    app.fire('pointermove', 100 + distance, 100, touch);
    app.fire('pointerup', 100 + distance, 100, touch);
    assert.equal(app.state().selected, distance === 9 ? 'box' : 'previous');
    assert.equal(app.state().tx, distance === 9 ? 0 : distance);
  }
});

test('Empty-space taps clear selection but drags do not', () => {
  const tap = setup();
  tap.fire('pointerdown', 100, 100);
  tap.fire('pointerup', 100, 100);
  assert.equal(tap.state().selected, null);
  const drag = setup();
  drag.fire('pointerdown', 100, 100);
  drag.fire('pointermove', 150, 100);
  drag.fire('pointerup', 150, 100);
  assert.equal(drag.state().selected, 'previous');
  assert.equal(drag.state().tx, 50);
});

test('Connectors allow dragging without clearing selection on a tap', () => {
  const app = setup();
  app.fire('pointerdown', 100, 100, { target: app.edge });
  app.fire('pointerup', 100, 100);
  assert.equal(app.state().selected, 'previous');
  app.fire('pointerdown', 100, 100, { target: app.edge });
  app.fire('pointermove', 125, 100);
  app.fire('pointerup', 125, 100);
  assert.equal(app.state().tx, 25);
});

test('A pinch can start over boxes and continue as a one-finger drag', () => {
  const app = setup(), touch = { pointerType: 'touch' }, second = { ...touch, pointerId: 2 };
  app.fire('pointerdown', 100, 100, { ...touch, target: app.box });
  app.fire('pointerdown', 200, 100, { ...second, target: app.box });
  app.fire('pointermove', 300, 100, second);
  assert.equal(app.state().scale, 1);
  app.fire('pointerup', 300, 100, second);
  const tx = app.state().tx;
  app.fire('pointermove', 130, 100, touch);
  assert.equal(app.state().tx, tx + 30);
  app.fire('pointerup', 130, 100, touch);
  assert.equal(app.state().selected, 'previous');
  assert.equal(app.state().pointers, 0);
  assert.equal(app.state().cursor, false);
});

test('Canceled gestures and lost capture do not select a box', () => {
  for (const type of ['pointercancel', 'lostpointercapture']) {
    const app = setup();
    app.fire('pointerdown', 100, 100, { target: app.box });
    app.fire(type, 100, 100);
    app.fire('pointerup', 100, 100);
    assert.equal(app.state().selected, 'previous');
    assert.equal(app.state().pointers, 0);
    assert.equal(app.state().cursor, false);
  }
});

test('Right clicks and untracked pointers do not start gestures', () => {
  const app = setup();
  app.fire('pointerdown', 100, 100, { target: app.box, button: 2 });
  app.fire('pointermove', 200, 100);
  app.fire('pointerup', 200, 100);
  assert.equal(app.state().transforms, 0);
  assert.equal(app.state().selected, 'previous');
  app.fire('pointerdown', 100, 100, { target: app.box });
  app.fire('pointerup', 100, 100, { pointerId: 2 });
  assert.equal(app.state().pointers, 1);
  app.fire('pointerup', 100, 100);
  assert.equal(app.state().selected, 'box');
});

test('Adding or removing a third finger does not cause a zoom jump', () => {
  const app = setup(), touch = { pointerType: 'touch' };
  for (const pointerId of [1, 2, 3]) app.fire('pointerdown', pointerId * 100, 100, { ...touch, pointerId, target: app.box });
  app.fire('pointermove', 200, 100, { ...touch, pointerId: 2 });
  assert.equal(app.state().scale, 0.5);
  app.fire('pointerup', 100, 100, touch);
  app.fire('pointermove', 300, 100, { ...touch, pointerId: 3 });
  assert.equal(app.state().scale, 0.5);
  app.fire('pointerup', 200, 100, { ...touch, pointerId: 2 });
  app.fire('pointerup', 300, 100, { ...touch, pointerId: 3 });
  assert.equal(app.state().selected, 'previous');
});
