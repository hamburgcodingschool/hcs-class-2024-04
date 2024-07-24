// CommonJS module

const PI = 3.1415;

function convertToUppercase(value) {
    return value.toUpperCase();
}

function log(msg) {
    console.log(msg);
}

module.exports = { convertToUppercase, log }