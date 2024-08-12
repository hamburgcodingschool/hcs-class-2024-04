import Sequelize from 'sequelize';

import { dbConfig } from '../config/databaseconf.mjs';

export const connection = new Sequelize(dbConfig);

// export const connection = new Sequelize({
//     host: 'localhost',
//     dialect: 'mysql',
//     username: 'root',
//     password: '',
//     database: 'restaurant',
//     define: {
//         timestamps: false
//     }
// });

try {
    await connection.authenticate();
    console.log("Authenticated");
} catch (error) {
    console.log('Unable to connect to the database: ', error);
}