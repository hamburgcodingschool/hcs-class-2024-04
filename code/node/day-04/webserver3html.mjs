import { createServer } from 'node:http';

const PORT = 3000;
const HOST = 'localhost';

const server = createServer((req, res) => {
    console.log("Request received!");
    res.statusCode = 200;
    // which type of files/data can we return
    // most common:
    /*
        text - text/plain
        html - text/html
        JSON - application/json
        XML - text/xml

        We can also return files
        png - image/png
        pdf - application/pdf
        ...
    */
    res.setHeader('Content-Type', 'text/html');

    res.write('<p><strong>Hello World from Portugal!</strong></p>\n');
    res.end();

});

server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
});