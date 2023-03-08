//This module provides a way to execute JavaScript code in a sandboxed environment. An example application of this module would be to evaluate user-defined code in a secure way.

const vm = require('vm');
// create a new context for the script
const context = vm.createContext({});
// define a variable in the context
vm.runInContext('var x = 200;', context);
// evaluate an expression in the context
const result = vm.runInContext('x * 2', context);
console.log(result); // 20
