import express from 'express';
import cors from 'cors';

import { MongoClient, ObjectId } from 'mongodb';

const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017";
const mongoClient = new MongoClient(uri);

const foodCollection = mongoClient.db('restaurant').collection('food');

app.get('/', function (req, res) {
    res.status(200).send("OK");
})
app.get('/food', async function (req, res) {
    const foodCursor = foodCollection.find();

    const foodData = await foodCursor.toArray();

    res.status(200).json(foodData);
})

app.get('/food/:id', async function (req, res) {
    const { id } = req.params;

    if (ObjectId.isValid(id)) {
        const food = await foodCollection.findOne({ _id: new ObjectId(id) })

        if (food === null) {
            res.status(404).json({ error: 'Non existing food.' });
        } else {
            res.status(200).json(food);
        }
    } else {
        res.status(404).json({ error: 'Bad formatted id.' });
    }
});

app.post('/food', async function (req, res) {
    let foodToInsert = req.body;
    try {
        const result = await foodCollection.insertOne(foodToInsert);
        const insertedId = result.insertedId;
        // res.status(201).json({ message: `Inserted id: ${insertedId}` });
        res.status(201).json({ ...foodToInsert, _id: insertedId });
    } catch (error) {
        res.status(500).json({ error: 'There was a problem inserting the new food item.' })
    }
});

app.listen(3000, () => {
    console.log("Server started");
})


