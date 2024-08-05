import express from 'express';
import cors from 'cors';
// The MongoClient class is a class that allows for making Connections to MongoDB.
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
app.use(cors({
    origin: '*'
}))

// connection string
const uri = "mongodb://localhost:27017";
const mongoClient = new MongoClient(uri);

// const dbWorld = mongoClient.db('world');
// const countriesCollection = dbWorld.collection('countries');

const countriesCollection = mongoClient.db('world').collection('countries');

app.get('/', function (req, res) {
    res.status(200).send("OK");
})
app.get('/countries', async function (req, res) {
    // the find method generates a cursor
    const countriesCursor = countriesCollection.find();

    // console.log(countriesCursor);

    // toArray - Returns an array of documents.
    const countriesData = await countriesCursor.toArray();

    res.status(200).json(countriesData);
})

// read info for a single country
app.get('/countries/:id', async function (req, res) {
    // const id=req.params.id;
    // using destructuring
    const { id } = req.params;

    // check if the id is in the correct format
    if (ObjectId.isValid(id)) {
        const country = await countriesCollection.findOne({ _id: new ObjectId(id) })

        if (country === null) {
            res.status(404).json({ error: 'Non existing country/code.' });
        } else {
            res.status(200).json(country);
        }
    } else {
        res.status(404).json({ error: 'Bad formatted id.' });
    }
});

app.listen(3000, () => {
    console.log("Server started");
})


