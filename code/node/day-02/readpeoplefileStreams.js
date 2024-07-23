const fs = require('fs');
const csv = require('csv-parser'); // middleware

fs.createReadStream('people.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => { // data event
        console.log("Reading row");
        console.log(row);
        console.log('Name:', row.Name);
        console.log('Age:', row.Age);
    })
    .on('end', () => { // data event
        console.log('CSV file successfully processed');
    })
    .on('error', (err) => { // error handling routine/method for the error event
        console.error('Error reading the file:', err);
    });
