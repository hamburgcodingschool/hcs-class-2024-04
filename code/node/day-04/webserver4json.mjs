import { createServer } from 'node:http';

const PORT = 3000;
const HOST = 'localhost';

const person = {
    name: "Edward Longshanks",
    country: "England",
    year: 1667
}

const server = createServer((req, res) => {
    console.log("Request received!");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // res.write(`{ "message" : "JSON response" }`);
    res.write(JSON.stringify(person));
    res.end();

});

server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
});