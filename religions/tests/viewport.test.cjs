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
    const tx = size.width / 2 - (bounds.x + bounds.width / 2) * scale;
    const ty = size.height / 2 - (bounds.y + bounds.height / 2) * scale;
    const view = constrainView({ scale, tx, ty }, bounds, size);
    assert.ok(bounds.width * scale <= size.width - 32 + 0.000001);
    assert.ok(bounds.height * scale <= size.height - 32 + 0.000001);
    near(view.tx + (bounds.x + bounds.width / 2) * scale, size.width / 2);
    near(view.ty + (bounds.y + bounds.height / 2) * scale, size.height / 2);
  }
});

test('Dragging stops when any diagram edge reaches the screen center', () => {
  const size = { width: 1280, height: 835 };
  const first = constrainView({ scale: 0.53, tx: 100000, ty: 100000 }, bounds, size);
  near(first.tx + bounds.x * first.scale, size.width / 2);
  near(first.ty + bounds.y * first.scale, size.height / 2);
  const last = constrainView({ scale: 0.53, tx: -100000, ty: -100000 }, bounds, size);
  near(last.tx + (bounds.x + bounds.width) * last.scale, size.width / 2);
  near(last.ty + (bounds.y + bounds.height) * last.scale, size.height / 2);
});

test('A diagram that fits can still be dragged to center either edge', () => {
  const size = { width: 390, height: 600 };
  const scale = getFitScale(bounds, size);
  const first = constrainView({ scale, tx: 100000, ty: -100000 }, bounds, size);
  const last = constrainView({ scale, tx: -100000, ty: 100000 }, bounds, size);
  near(first.tx + bounds.x * scale, size.width / 2);
  near(last.tx + (bounds.x + bounds.width) * scale, size.width / 2);
  near(first.ty + (bounds.y + bounds.height) * scale, size.height / 2);
  near(last.ty + bounds.y * scale, size.height / 2);
});

test('Both axes can move even when only one is larger than the screen', () => {
  const size = { width: 1200, height: 400 };
  const view = constrainView({ scale: 0.1, tx: 100000, ty: -100000 }, bounds, size);
  near(view.tx + bounds.x * view.scale, size.width / 2);
  near(view.ty + (bounds.y + bounds.height) * view.scale, size.height / 2);
});

test('Any point inside the diagram can be placed at the screen center', () => {
  const size = { width: 390, height: 600 };
  for (const scale of [getFitScale(bounds, size), 0.53, 2.2]) {
    for (const xPart of [0, 0.1, 0.5, 0.9, 1]) for (const yPart of [0, 0.1, 0.5, 0.9, 1]) {
      const x = bounds.x + bounds.width * xPart;
      const y = bounds.y + bounds.height * yPart;
      const tx = size.width / 2 - x * scale;
      const ty = size.height / 2 - y * scale;
      const view = constrainView({ scale, tx, ty }, bounds, size);
      near(view.tx + x * scale, size.width / 2);
      near(view.ty + y * scale, size.height / 2);
    }
  }
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
  near(view.tx + (bounds.x + bounds.width) * view.scale, newSize.width / 2);
  assert.ok(view.ty + bounds.y * view.scale <= newSize.height / 2);
  assert.ok(view.ty + (bounds.y + bounds.height) * view.scale >= newSize.height / 2);
});
