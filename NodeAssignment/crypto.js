// This module provides a way of handling encrypted data.

const crypto = require('crypto');

// generate a random string
const randomString = crypto.randomBytes(100).toString('hex');
console.log(randomString);

// create a hash
const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);
