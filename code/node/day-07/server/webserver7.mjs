import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // res.send('<h1>Hello World</h1>')

    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory

    const options = {
        root: path.join(__dirname)
    };
    // reading a static file
    res.sendFile('home.html', options)
})
app.get('/secondpage', function (req, res) {
    // res.send('<h1>Hello World</h1>')

    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory

    const options = {
        root: path.join(__dirname)
    };
    // reading a static file
    res.sendFile('secondpage.html', options)
})
app.get('/example', function (req, res) {
    res.status(200).render("example");
})
app.get('/template1', function (req, res) {
    res.status(200).render("template", { content: "Content from the first template" });
})
app.get('/template2', function (req, res) {
    res.status(200).render("template", { content: "Content from the second template" });
})

app.listen(3000, () => {
    console.log("Server started");
})


