import express from 'express';
import cors from 'cors';

import { connection } from './controllers/databaseconnection.mjs';
import { FoodItem } from './models/fooditems.mjs';

const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json());

app.get('/', function (req, res) {
    res.status(200).send("OK");
})

app.get('/food', async function (req, res) {
    // FoodItem.findAll()
    //     .then(fooditems => {
    //         res.status(200).json(fooditems);
    //     })
    //     .catch(error => {
    //         res.status(500).json({ error: error.message });
    //     })

    // try {
    //     const fooditems = await FoodItem.findAll();
    //     res.status(200).json(fooditems);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }

    try {
        const fooditems = await connection.query('SELECT * FROM fooditems', {
            type: connection.QueryTypes.SELECT
        });
        res.status(200).json(fooditems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/food/:id', async function (req, res) {
    const { id } = req.params;

    // try {
    //     const fooditems = await FoodItem.findOne({
    //         where: {
    //             food_id: id
    //         }
    //     });
    //     res.status(200).json(fooditems);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }

    // array replacement - positional placeholders
    // try {
    //     const fooditems = await connection.query('SELECT * FROM fooditems WHERE food_id=?', {
    //         replacements: [id],
    //         type: connection.QueryTypes.SELECT
    //     });
    //     res.status(200).json(fooditems);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }

    // object replacement - named placeholders
    try {
        const fooditems = await connection.query('SELECT * FROM fooditems WHERE food_id=:food_id', {
            replacements: { food_id: id },
            type: connection.QueryTypes.SELECT
        });
        res.status(200).json(fooditems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use(function (req, res) {
    res.status(404).json({ message: 'Page not found' });
});

app.listen(3000, () => {
    console.log("Server started");
})