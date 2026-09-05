const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'history.js'), 'utf8'), context);
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const data = vm.runInContext(script.slice(0, script.indexOf('const groups ='))
  .replace('(() => {', '') + ';({nodes, edges, references})', context);
const { nodes, edges, references } = data;
const byId = new Map(nodes.map(node => [node.id, node]));
const edge = (source, target) => edges.find(item => item.source === source && item.target === target);

test('Every box and connection has a valid, unique ID', () => {
  assert.equal(byId.size, nodes.length);
  const keys = new Set();
  for (const item of edges) {
    assert.ok(byId.has(item.source) && byId.has(item.target));
    assert.notEqual(item.source, item.target);
    const key = `${item.source}|${item.target}`;
    assert.ok(!keys.has(key), key);
    keys.add(key);
    assert.ok(byId.get(item.source).year <= byId.get(item.target).year, key);
  }
});

test('Every connection has a specific explanation and a source', () => {
  for (const item of edges) {
    assert.ok(item.label.length > 30, `${item.source}|${item.target}`);
    assert.ok(item.sources.length > 0);
    for (const id of item.sources) assert.ok(references[id], id);
  }
  for (const node of nodes) for (const id of node.sources || []) assert.ok(references[id], id);
  for (const [title, url] of Object.values(references)) {
    assert.ok(title.length > 10);
    assert.equal(new URL(url).protocol, 'https:');
  }
});

test('Short dates preserve uncertainty and distinguish milestones', () => {
  for (const node of nodes) assert.ok(node.shortDate, node.id);
  assert.match(byId.get('zoro').shortDate, /disputed/);
  assert.match(byId.get('buddha').shortDate, /debated/);
  assert.match(byId.get('torah').shortDate, /centuries/);
  assert.match(byId.get('japanbuddh').shortDate, /538 or 552/);
  assert.match(byId.get('nhworks').shortDate, /codices/);
  for (const id of ['eastorth', 'catholic']) assert.match(byId.get(id).shortDate, /separation marker/);
  assert.doesNotMatch(script, /d\.textContent\s*=\s*fmtYear\(n\.year\)/);
});

test('Reviewed dates have an explicit basis', () => {
  assert.equal(byId.get('shaykhi').year, 1826);
  assert.match(byId.get('shaykhi').dateBasis, /death/);
  assert.equal(byId.get('avesta').year, 350);
  assert.match(byId.get('avesta').name, /compilation/);
  assert.match(byId.get('avesta').dateBasis, /does not date the composition/);
  assert.equal(byId.get('orthjud').name, 'Orthodox Judaism — modern identity');
  assert.match(byId.get('orthjud').dateBasis, /not a founding year/);
});

test('Christian continuity does not depend on event links', () => {
  const reached = new Set(['earlychrist']);
  let previousSize;
  do {
    previousSize = reached.size;
    for (const item of edges) if (item.type === 'lineage' && reached.has(item.source)) reached.add(item.target);
  } while (previousSize !== reached.size);
  for (const id of ['chalcedon', 'catholic', 'eastorth', 'reformation', 'lutheran', 'methodist', 'baptist']) assert.ok(reached.has(id), id);
  assert.equal(edge('earlychrist', 'nicaea').type, 'event');
  assert.equal(edge('nicaea', 'chalcedon').type, 'event');
});

test('Traditions within religions are not classified as splits', () => {
  for (const [a, b] of [['islam', 'sufi'], ['vaishnava', 'bhakti'], ['shaiva', 'bhakti'], ['rabbinic', 'kabbalah'], ['oriental', 'ethiopian']]) {
    assert.equal(edge(a, b).type, 'within');
  }
  assert.match(edge('islam', 'sufi').label, /not a third sect/);
  assert.equal(edge('earlychrist', 'gnostic').type, 'influence');
});

test('Baptist origins distinguish General and Particular histories', () => {
  assert.equal(edge('englishdissent', 'baptist').type, 'lineage');
  assert.equal(edge('reformed', 'baptist').type, 'influence');
  assert.match(edge('reformed', 'baptist').label, /Particular/);
  assert.match(byId.get('baptist').date, /1609.*1630s/);
});

test('All relationship types have a filter and the required scripts load in order', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const type of new Set(edges.map(item => item.type))) {
    assert.ok(html.includes(`id="show${type[0].toUpperCase()}${type.slice(1)}"`), type);
  }
  assert.ok(html.indexOf('src="history.js') < html.indexOf('src="script.js'));
});
