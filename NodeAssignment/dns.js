//This module provides a way to perform DNS lookups and hostname resolution. An example application of this module would be to check if a domain name is available or to resolve the IP address of a domain name.
const dns = require('dns');

// Resolving a hostname to an IP address
dns.resolve('www.sample.com', 'A', (err, addresses) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(addresses);
});
