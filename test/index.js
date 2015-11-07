const test = require('tape-async');
const requireProps = require('..')(__dirname);


test('work with absolute paths', t => {
  const target = {name: 'target'};
  requireProps(target, ['is-plain-obj']);
  t.deepEqual(target, {name: 'target', 'is-plain-obj': true});
});


test('work with relative paths', t => {
  const target = {name: 'target'};
  requireProps(target, ['./fixtures/module1', './fixtures/module-2']);
  t.deepEqual(target, { name: 'target', module1: 1, 'module-2': 'target' });
});
