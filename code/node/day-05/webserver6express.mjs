import express from 'express';

const app = express();

// middleware to parse incoming json (normally from a POST, PUT or PATCH request) - previously we needed to use the body-parser module
app.use(express.json());

const persons = [
    {
        id: 1,
        name: "Edward Longshanks",
        country: "England",
        year: 1667
    },
    {
        id: 2,
        name: "Louis XIV",
        country: "France",
        year: 1750
    }
]

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.get('/persons', function (req, res) {
    // get data from a database
    // method chaining
    res.status(200).json(persons);
})

// :id - placeholder
app.get('/persons/:id', function (req, res) {
    let requestedId = Number(req.params.id);
    let person = persons.find(person => person.id === requestedId);
    if (typeof person === "undefined") {
        res.status(404).json('{ "error" : "Person not found" }')
    } else {
        res.status(200).json(person);
    }
})

app.post('/persons', function (req, res) {
    console.log(req.body);
    let personToInsert = req.body;
    let newId = persons.length + 1;
    let newPerson = { ...personToInsert, id: newId };
    persons.push(newPerson);
    // res.send(201).send('{ "msg" : "Person inserted" }')
    res.status(201).json(newPerson);
});

app.listen(3000, () => {
    console.log("Server started");
})