import { createServer } from 'node:http';

const PORT = 3000;
const HOST = 'localhost';

const person = {
    name: "Edward Longshanks",
    country: "England",
    year: 1667
}

const server = createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log("Request received!");

    // routes
    // if (req.url === "/person") {
    switch (req.url) {
        case "/person":
            switch (req.method) {
                case "GET":
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.write(JSON.stringify(person));
                    break;
                case "POST":
                    console.log("Inserting record");
                    let body = '';
                    req.on('data', (chunk) => {
                        body += chunk;
                    });
                    req.on('end', () => {
                        console.log(body);
                    });
                    // insert record, which is stored in the 'body' variable, in the database
                    // 201 - created
                    res.statusCode = 201;
                    res.setHeader('Content-Type', 'application/json');
                    res.write(`{ "message" : "Record inserted" }`);
                    break;
                default:
                    console.log("Another method");
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.write(`{ "message" : "Another method" }`);

            }
            break;
        case "/persons":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>List of persons</strong></h1>\n');
            break;
        // } else {
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>Page not found</strong></p>\n');
    }

    res.end();

});

server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`);
});