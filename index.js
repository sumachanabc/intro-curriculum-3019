'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
