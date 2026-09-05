const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const select = script.slice(script.indexOf('function selectNode('), script.indexOf('const viewPadding='));
const sync = script.slice(script.indexOf('function syncMobileMode('), script.indexOf("mobileView.addEventListener('change'"));

function setup(mobile, landscape) {
  const classes = new Set(['hidden']);
  const calls = { updates: 0, renders: 0, resizes: 0, blurred: 0, list: [] };
  const input = { blur: () => calls.blurred++ };
  const searchResults = { hidden: false };
  const context = vm.createContext({
    mobileView: { matches: mobile }, landscapeView: { matches: landscape },
    selectedId: 'previous', map: new Map([['previous', {}], ['box', {}]]),
    nodeInfo: { classList: { toggle: (name, on) => on ? classes.add(name) : classes.delete(name) }, scrollTop: 50 },
    helpPanel: { hidden: true, contains: () => false },
    document: { activeElement: input, querySelector: () => ({ contains: element => element === input }), getElementById: () => searchResults },
    closeHelp() {}, updateFilters: () => calls.updates++, renderNodeInfo: () => calls.renders++,
    setListView: on => calls.list.push(on), resizeView: () => calls.resizes++, requestAnimationFrame: callback => callback()
  });
  vm.runInContext(select + sync, context);
  return { context, calls, searchResults, hidden: () => classes.has('hidden'), run: code => vm.runInContext(code, context) };
}

test('Mobile taps update highlights without opening details in either orientation', () => {
  for (const landscape of [false, true]) {
    const app = setup(true, landscape);
    app.run("selectNode('box')");
    assert.equal(app.context.selectedId, 'box');
    assert.equal(app.calls.updates, 1);
    assert.equal(app.hidden(), true);
  }
});

test('Desktop selection still opens details', () => {
  const app = setup(false, true);
  app.run("selectNode('box')");
  assert.equal(app.hidden(), false);
  assert.equal(app.calls.updates, 1);
});

test('Mobile landscape leaves list view and closes search before resizing', () => {
  const app = setup(true, true);
  app.run('syncMobileMode()');
  assert.deepEqual(app.calls.list, [false]);
  assert.equal(app.calls.blurred, 1);
  assert.equal(app.searchResults.hidden, true);
  assert.equal(app.hidden(), true);
  assert.equal(app.context.selectedId, 'previous');
  assert.equal(app.calls.resizes, 1);
});

test('Mobile portrait keeps navigation available and details hidden', () => {
  const app = setup(true, false);
  app.run('syncMobileMode()');
  assert.deepEqual(app.calls.list, []);
  assert.equal(app.calls.blurred, 0);
  assert.equal(app.hidden(), true);
});

test('Desktop mode restores details for the selected box', () => {
  const app = setup(true, true);
  app.run('syncMobileMode()');
  app.context.mobileView.matches = false;
  app.run('syncMobileMode()');
  assert.equal(app.hidden(), false);
  assert.equal(app.calls.renders, 1);
  assert.equal(app.context.selectedId, 'previous');
});
