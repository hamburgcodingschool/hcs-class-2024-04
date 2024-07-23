const fs = require('node:fs');

// reading a file asynchronously
fs.readFile('./people.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("End");
