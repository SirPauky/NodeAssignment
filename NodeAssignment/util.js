//This module provides utility functions that are helpful for working with objects and functions. An example application of this module would be to create custom error objects or to inspect object properties.

const util = require('util');
// Inspect an object

const objectToInspect = {
  name: 'WellaSomething',
  age: 12,
  email: 'wellasomething@example.com',
};
const inspectedObject = util.inspect(objectToInspect, { colors: true });
console.log(inspectedObject); // Output: { \u001b[32mname\u001b[39m: 'WellaSomething', \u001b[32mage\u001b[39m: 12, \u001b[32memail\u001b[39m: 'wellasomething@example.com' }
