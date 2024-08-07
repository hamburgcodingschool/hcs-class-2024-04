import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

const foodSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String
}, { collection: 'food' });

const foodCollection = mongoose.model('Food', foodSchema);

// const foodCollection = mongoose.model('Food', { name: String });

const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json());

app.get('/', function (req, res) {
    res.status(200).send("OK");
})

app.get('/food', async function (req, res) {
    const listFoodItems = [];
    const foodItems = foodCollection.find().cursor();
    foodItems.on('data', function (foodItem) {
        listFoodItems.push(foodItem);
    });
    foodItems.on('end', function (foodItem) {
        res.status(200).json(listFoodItems);
    });
});

app.get('/food/:id', async function (req, res) {
    const { id } = req.params;
    const foodItem = await foodCollection.findById(id);
    res.status(200).json(foodItem);
});

app.listen(3000, () => {
    console.log("Server started");
})