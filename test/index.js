const test = require('tape-async');
const requireProps = require('..');

test('add details files', function *(t) {
  const result = yield requireProps();
  t.equal(result, 42);
});
