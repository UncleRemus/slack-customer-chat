/* eslint-env node */

import http from 'http';

const port = process.env.SERVER_PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);

// eslint-disable-next-line no-console
console.log(`server started on port ${port}`);
