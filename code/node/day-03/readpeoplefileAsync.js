// const fs = require('fs');
const fs = require('node:fs');

// reading a file asynchronously
fs.readFile('./people.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    // console.log(typeof data); // string
    let rows = data.split(/\r?\n/).filter(row => row.length > 0);
    console.log(rows);
    // [
    //     'Name;City;Country;Age',
    //     'Pedro Remoaldo;Ermesinde;Portugal;28',
    //     'Anna Kliemann;Luebeck;Germany;27'
    // ]
    let headers = rows.shift().split(";");
    console.log(headers); // [ 'Name', 'City', 'Country', 'Age' ]
    rows.forEach(row => {
        let lineArray = row.split(";")
        console.log(lineArray); // [ 'Pedro Remoaldo', 'Ermesinde', 'Portugal', '28' ]
        console.log(lineArray[0]); // Pedro Remoaldo
        // for (let column of lineArray) {
        //     console.log(column)
        // }
    })
});
console.log("End");
