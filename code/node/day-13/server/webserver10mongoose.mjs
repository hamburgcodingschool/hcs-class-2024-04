import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { foodCollection } from './foodItemsModel.mjs';

mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json());

app.get('/', function (req, res) {
    res.status(200).send("OK");
})

// food?description=value

app.get('/food', async function (req, res) {
    // console.log(req.query);
    // console.log(typeof req.query.description);
    // console.log(req.query.hasOwnProperty('description'));

    // if (typeof req.query.description!=="undefined") {
    if (req.query.hasOwnProperty('description')) {
        console.log(req.query.description);
        let searchValue = req.query.description;

        // const foodItems = await foodCollection.find({ description: new RegExp(searchValue, "ui") });

        // u - unicode
        // i - case-insensitive
        // const foodItems = await foodCollection.find({ description: { $regex: searchValue, $options: "ui" } });

        const foodItems = await foodCollection.find();

        const results = foodItems.filter(foodItem => foodItem.description.includes(searchValue));

        res.status(200).json(results);

    } else {

        // const foodItems = await foodCollection.find();
        // res.status(200).json(foodItems);

        let listFoodItems = [];
        const foodItems = foodCollection.find().cursor();
        // foodItems.on('data', function (foodItem) {
        //     listFoodItems.push(foodItem);
        // });
        // foodItems.on('end', function (foodItem) {
        //     res.status(200).json(listFoodItems);
        // });

        // for await (const foodItem of foodItems) {
        //     listFoodItems.push(foodItem);
        // }
        // res.status(200).json(listFoodItems);

        let foodItem = await foodItems.next();
        while (foodItem !== null) {
            listFoodItems.push(foodItem);
            foodItem = await foodItems.next();
        }

        await foodItems.close();

        res.status(200).json(listFoodItems);
    }

});

// using a route parameter
app.get('/food/:id', async function (req, res) {
    const { id } = req.params;
    const foodItem = await foodCollection.findById(id);
    res.status(200).json(foodItem);
});

app.post('/food', async function (req, res) {
    // let foodToInsert = req.body;
    // creating a new "food" document
    let foodToInsert = new foodCollection(req.body);

    // Alternative way to test
    /*
    let error = foodToInsert.validateSync();
    if (error === undefined) {
        let result = await foodToInsert.save();
        res.status(200).json(result);
    } else {
        res.status(500).json({ error: error.message });
    }
    */

    try {
        let result = await foodToInsert.save();
        // console.log(result);
        // it returns:
        /*
        {
            name: '1',
            description: '2',
            price: 3,
            category: '4',
            _id: new ObjectId('66b49b06c8dd7a7a8fac3b25'),
            __v: 0
        }
        */

        res.status(200).json(result);
    } catch (e) { // e, err, error
        // errors:
        //   Food validation failed: category: Path `category` is required., price: Path `price` (3) is less than minimum allowed value (5).
        res.status(500).json({ error: e.message });
    }
});

app.listen(3000, () => {
    console.log("Server started");
})