//  the assert module is a built-in module that provides a simple set of assertion tests that can be used to test invariants in code.
// The assert module is used to write unit tests for Node.js applications and modules.

const assert = require('assert');

function add(p, w) {
  return p + w;
}


assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(2, 3), 6); // will throw an AssertionError