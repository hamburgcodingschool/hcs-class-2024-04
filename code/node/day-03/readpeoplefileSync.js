const fs = require('node:fs');
// const data = fs.readFileSync('./people.csv');
{/* <Buffer 4e 61 6d 65 3b 43 69 74 79 3b 43 6f 75 6e 74 72 79 3b 41 67 65 0d 0a 50 65 64 72 6f 20 52 65 6d 6f 61 6c 64 6f 3b 45 72 6d 65 73 69 6e 64 65 3b 50  */ }
// 6f ... 43 more bytes>

// error handling
try {
    const data = fs.readFileSync('./people.csv', 'utf8');
    console.log(data);
} catch (error) {
    console.error(error);
}
console.log("End");
