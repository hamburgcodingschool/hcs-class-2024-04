import { Sequelize, DataTypes } from "sequelize";

import { connection } from '../controllers/databaseconnection.mjs';

export const FoodItem = connection.define(
    'fooditems',
    {
        food_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        category_id: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: "foodItems",
        timestamps: false
    }
)

FoodItem.sync()
    .then(() => {
        console.log("Synchronized table 'fooditems'.");
    })
    .catch(error => {
        console.log('Could not synchronize with the table "fooditems". Got the error', error);
    })