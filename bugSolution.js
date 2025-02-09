const http = require('http');

const server = http.createServer((req, res) => {
  let count = 0;
  function processChunk() {
    const start = Date.now();
    let innerCount = 0;
    while (innerCount < 10000000 && Date.now() - start < 10) {
      innerCount++;
    }
    count += innerCount;
    if (count < 1000000000) {
      setTimeout(processChunk, 0); 
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }
  processChunk();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});