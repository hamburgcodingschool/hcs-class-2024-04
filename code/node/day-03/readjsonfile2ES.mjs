// const data = require('./people.json');
import data from './people.json' assert { type: 'json' };
console.log(data);
console.table(data.people);

// (node:23144) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
// (Use `node --trace-warnings ...` to show where the warning was created)