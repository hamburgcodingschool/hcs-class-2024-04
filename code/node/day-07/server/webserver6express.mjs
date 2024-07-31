import express from 'express';

const app = express();

// middleware to parse incoming json (normally from a POST, PUT or PATCH request) - previously we needed to use the body-parser module
app.use(express.json());

const persons = [
    {
        id: 1,
        name: "Maximilian",
        country: "Bavaria",
        year: 1850
    },
    {
        id: 2,
        name: "Edward Longshanks",
        country: "England",
        year: 1667
    },
    {
        id: 3,
        name: "Louis XIV",
        country: "France",
        year: 1750
    }
]

// ['name','country','year']
let fields = Object.keys(persons[0]);
console.log(fields); // [ 'id', 'name', 'country', 'year' ]

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.get('/persons', function (req, res) {
    console.log(req.query); // { sortBy: 'name' }
    // get data from a database

    if (typeof req.query.sortBy !== "undefined") {
        if (!fields.includes(req.query.sortBy)) {
            res.status(404).json({ "message": "Inexistent field" });
        } else {
            // returned sorted

            const field = req.query.sortBy;

            const result = [...persons].sort((person1, person2) => (person1[field] < person2[field]) ? -1 : 1);

            res.status(200).json(result);

            // res.sendStatus(200);
        }
    } else {
        // method chaining
        res.status(200).json(persons);
    }
})

// Implement a route that allows the sorting of the data by any of its fields.
// The name of the field should be passed using the querystring and the parameter should be called sortBy:
// http://localhost:3000/persons?sortBy=name

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

app.put('/persons/:id', function (req, res) {
    let idToUpdate = Number(req.params.id);
    let newValues = req.body;
    // find the object with id provided
    let index = persons.findIndex(person => person.id === idToUpdate);
    if (index !== -1) {
        // destructuring
        persons[index] = { ...persons[index], ...newValues };
        res.status(200).json(persons[index]);
    } else {
        res.send(404).json('{ "message" : "Non existing person" }')
    }
})

app.patch('/persons/:id', function (req, res) {
    let idToUpdate = Number(req.params.id);
    let newValues = req.body;
    // find the object with id provided
    let index = persons.findIndex(person => person.id === idToUpdate);
    if (index !== -1) {
        // destructuring
        persons[index] = { ...persons[index], ...newValues };
        res.status(200).json(persons[index]);
    } else {
        res.send(404).json('{ "message" : "Non existing person" }')
    }
})

app.delete('/persons/:id', function (req, res) {
    let idToDelete = Number(req.params.id);
    // Find the index of the person to delete
    let index = persons.findIndex(person => person.id === idToDelete);

    if (index !== -1) {
        // let personDeleted = persons[index];

        // Remove the person from the array
        persons.splice(index, 1);

        res.status(200).send('{ "message" : "Person deleted" }');
        // res.status(200).json(personDeleted);
    } else {
        res.status(404).json({ "message": "Person not found" });
    }
});

// app.use(function (req, res) {
//     res.status(404).json({ message: "Page not found" });
// });
app.all("*", (req, res) => {
    res.status(404).json({ message: "Page not found" });
})

app.listen(3000, () => {
    console.log("Server started");
})