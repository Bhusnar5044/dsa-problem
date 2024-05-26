// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}

function reverse(arr, start, end){
    let i = start, j= end-1;
    while(i <= j){
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}


function main() {
    // code here
    // let arr = inputString[0].split(' ').slice(1).map(item => parseInt(item))
    // let k = parseInt(inputString[1])
    // let n = parseInt(inputString[0][0])

    let n = parseInt(inputString[0][0]);
    let a = inputString[0].split(' ').slice(1);
    let b = parseInt(inputString[1])
    reverse(a, 0, n);
    reverse(a, 0, b);
    reverse(a, b, n);
    console.log(`${a.join(' ')} `)
}