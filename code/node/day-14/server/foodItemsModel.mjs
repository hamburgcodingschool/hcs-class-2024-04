import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const foodSchema = new Schema({
// Schema with validation/constraints
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: function (value) {
                return /^[^0-9]*$/.test(value);
            },
            message: "The name can not contain numbers!"
        }
    },
    description: String,
    price: {
        type: Number,
        min: [5, "Price must be bigger than 5"]
    },
    category: {
        type: String,
        required: true
    }
}, { collection: 'food', versionKey: false });
// versionKey configuration option means Mongoose is not going to insert a __v property each time we do an insert

// const foodCollection = mongoose.model('Food', { name: String });

export const foodCollection = mongoose.model('Food', foodSchema);