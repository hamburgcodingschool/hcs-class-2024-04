// default modules - CommonJS
const os = require('os');
console.log("Processor: " + os.machine());
console.log("Platform: " + os.platform());
console.log("Release number: " + os.release());
console.log("Free memory: " + os.freemem());
// let cpus = os.cpus();
// for (let cpu of cpus) {
for (let cpu of os.cpus()) {
    console.log(cpu);
}
console.log("Hostname: " + os.hostname());