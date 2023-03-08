//This module provides utilities for working with query strings. An example application of this module would be to parse query strings from URLs or to stringify objects into query strings.

const querystring = require('querystring');
const params = {
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: ''
};
const encoded = querystring.stringify(params);
console.log(`Encoded: ${encoded}`);
const decoded = querystring.parse(encoded);
console.log(`Decoded: ${JSON.stringify(decoded)}`);
