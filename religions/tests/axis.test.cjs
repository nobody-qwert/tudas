const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const helper = script.slice(script.indexOf('function getBranchLabelFontSize('), script.indexOf('function updateBranchLabels('));
const fontSize = vm.runInNewContext(`${helper};getBranchLabelFontSize`);

test('Labels keep their usual size at 20% zoom and above', () => {
  for (const zoom of [0.2, 0.53, 1, 2.2]) {
    assert.equal(fontSize(zoom, 35, 835), 14);
    assert.equal(fontSize(zoom, 26, 700), 13);
    assert.equal(fontSize(zoom, 26, 400), 12);
  }
});

test('Zooming out reduces label size without sudden changes', () => {
  for (const [width, height] of [[35, 835], [26, 700], [26, 400]]) {
    const maximum = fontSize(0.2, width, height);
    let previous = fontSize(0, width, height);
    for (let step = 1; step <= 200; step++) {
      const current = fontSize(step / 1000, width, height);
      assert.ok(current >= previous && current - previous <= 0.25);
      assert.ok(current >= 11 && current <= maximum);
      previous = current;
    }
    assert.ok(fontSize(0.1, width, height) < maximum);
  }
});

test('The full overview never reduces labels below 11 pixels', () => {
  for (const zoom of [0, 0.001, 0.03, 0.05, 0.08]) {
    assert.equal(fontSize(zoom, 35, 835), 11);
    assert.equal(fontSize(zoom, 26, 400), 11);
  }
});

test('Zooming back in restores the original label size', () => {
  const sizes = [0.53, 0.15, 0.03, 0.15, 0.53].map(zoom => fontSize(zoom, 35, 835));
  assert.equal(sizes[0], sizes[4]);
  assert.equal(sizes[1], sizes[3]);
  assert.ok(sizes[2] < sizes[1] && sizes[1] < sizes[0]);
});
