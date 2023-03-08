//This module provides utilities for working with URLs. An example application of this module would be to parse URLs or to format URLs with query parameters.

const url = require('url');
// Parsing a URL

const parsedUrl = url.parse('https://www.example.com/path/to/resource?foo=bar');
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
// Formatting a URL
const formattedUrl = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: '/path/to/resource',
  query: {
    foo: 'bar'
  }
});
console.log(formattedUrl);
