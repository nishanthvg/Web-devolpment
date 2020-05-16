const fs = require("fs");

const file = fs.readFileSync('./input.txt').toString();
let i =0;
let floor = 0;
let firstBasementPosition = 0;
console.time('Fun challenge');
while (i !== 7000) {
    if(file[i] === '(') floor++;
    else if(file[i] === ')') floor--;
    i++;
}
let i1 = 0;
let floor1 = 0;
while (i1 !== 7000) {
    if(file[i1] === '(') floor1++;
    else if(file[i1] === ')') floor1--;
    if(floor1 < 0) {
        console.log(i1);
        break;
    }
    i1++;
}
console.timeEnd('Fun challenge')
console.log(floor,i1);

