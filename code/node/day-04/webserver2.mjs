import { createServer } from 'node:http';

const PORT = 3000;
const HOST = 'localhost';

const server = createServer((req, res) => {
    console.log("Request received!");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Hello World from Portugal!\n');
    res.end();
    // res.end('Hello World!\n');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
});