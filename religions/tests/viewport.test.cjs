const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const helpers = script.slice(script.indexOf('const viewPadding='), script.indexOf('let scale=1,'));
const { getFitScale, constrainView } = vm.runInNewContext(`${helpers};({getFitScale,constrainView})`);
const bounds = { x: -80, y: -10, width: 9600, height: 7600 };
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 0.000001, `${actual} != ${expected}`);

test('The opening scale fits the whole diagram on desktop and mobile', () => {
  for (const size of [{ width: 1900, height: 860 }, { width: 390, height: 600 }, { width: 320, height: 400 }]) {
    const scale = getFitScale(bounds, size);
    const view = constrainView({ scale, tx: 0, ty: 0 }, bounds, size);
    assert.ok(bounds.width * scale <= size.width - 32 + 0.000001);
    assert.ok(bounds.height * scale <= size.height - 32 + 0.000001);
    near(view.tx + (bounds.x + bounds.width / 2) * scale, size.width / 2);
    near(view.ty + (bounds.y + bounds.height / 2) * scale, size.height / 2);
  }
});

test('Dragging stops at all four diagram edges', () => {
  const size = { width: 1280, height: 835 };
  const first = constrainView({ scale: 0.53, tx: 100000, ty: 100000 }, bounds, size);
  near(first.tx + bounds.x * first.scale, 16);
  near(first.ty + bounds.y * first.scale, 16);
  const last = constrainView({ scale: 0.53, tx: -100000, ty: -100000 }, bounds, size);
  near(last.tx + (bounds.x + bounds.width) * last.scale, size.width - 16);
  near(last.ty + (bounds.y + bounds.height) * last.scale, size.height - 16);
});

test('A diagram that fits cannot be dragged away from the center', () => {
  const size = { width: 390, height: 600 };
  const scale = getFitScale(bounds, size);
  const first = constrainView({ scale, tx: 100000, ty: -100000 }, bounds, size);
  const last = constrainView({ scale, tx: -100000, ty: 100000 }, bounds, size);
  near(first.tx, last.tx);
  near(first.ty, last.ty);
});

test('Only the axis that is larger than the screen can move', () => {
  const size = { width: 1200, height: 400 };
  const view = constrainView({ scale: 0.1, tx: 100000, ty: -100000 }, bounds, size);
  near(view.tx + (bounds.x + bounds.width / 2) * view.scale, size.width / 2);
  near(view.ty + (bounds.y + bounds.height) * view.scale, size.height - 16);
});

test('Zoom stops at the full view and at the maximum scale', () => {
  const size = { width: 390, height: 600 };
  near(constrainView({ scale: 0.00001, tx: 0, ty: 0 }, bounds, size).scale, getFitScale(bounds, size));
  near(constrainView({ scale: 100, tx: 0, ty: 0 }, bounds, size).scale, 2.2);
});

test('Resizing clamps a previously valid view to the new screen', () => {
  const oldSize = { width: 390, height: 600 };
  const newSize = { width: 1400, height: 500 };
  const oldView = constrainView({ scale: 0.53, tx: -100000, ty: -100000 }, bounds, oldSize);
  const view = constrainView(oldView, bounds, newSize);
  near(view.tx + (bounds.x + bounds.width) * view.scale, newSize.width - 16);
  assert.ok(view.ty + bounds.y * view.scale <= 16);
  assert.ok(view.ty + (bounds.y + bounds.height) * view.scale >= newSize.height - 16);
});
