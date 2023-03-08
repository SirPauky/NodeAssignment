//This module provides utilities for working with file and directory paths. An example application of this module would be to join and resolve file paths or to get the directory name of a file path.

const path = require('path');
// Joining two path segments
console.log(path.join('/foo', 'bar')); // Outputs: /foo/bar
