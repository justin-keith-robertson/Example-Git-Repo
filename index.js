const value = 1 + 1;
console.log(`1 + 1 = ${ value }`);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Hello what is your name?\n', (name) => {
    console.log(`Hello ${name}`);
    readline.close();
})
