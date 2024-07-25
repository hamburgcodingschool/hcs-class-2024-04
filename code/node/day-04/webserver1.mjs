// import * as http from 'node:http';
// http - module
import { createServer } from 'node:http';

const PORT = 3000;
const HOST = 'localhost';

// req - request
// res - response
// to "invoke" this function we use the url http://localhost:3000/ on a browser
const server = createServer((req, res) => {
    // writeHead - Sends a response header to the request.
    console.log("Request received!");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // end signals that no more data will be sent
    res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
// 127.0.0.1 - localhost
// server.listen(3000, '127.0.0.1', () => {
server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
});