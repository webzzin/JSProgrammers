const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(i=>+i);
}).on('close', function () {
    n = input[0];
    console.log(
        (n%2)? `${n} is odd`: `${n} is even` 
    );
});