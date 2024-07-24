// require() loads CommonJS modules
const fs = require('node:fs');

// Function to read and parse the JSON file
function readJsonFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            // console.table(jsonData.people);
            jsonData.people.forEach(person => {
                console.log(`Name: ${person.name}`);
                console.log(`City: ${person.city}`);
                console.log(`Country: ${person.country}`);
                console.log(`Age: ${person.age}`);
                console.log('-----------------------');
            });
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
        }
    });
}

// Call the function with the path to your JSON file
readJsonFile('./people.json');