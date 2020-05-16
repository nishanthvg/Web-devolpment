const fs = require('fs'); // fs - file system 
//async
fs.readFile('./text.txt', (err,data) => {
    if(err) {
        throw err;
    }
    console.log('Async',data.toString());
})

//sync
const file = fs.readFileSync('./text.txt');
console.log('sync', file.toString());


//appending the content to a existing file or if the file doesnt exist then it creates a new one 
fs.appendFile('./text.txt', ' This is so cool', err => {
    if(err) throw err;
})

//to create a new file 
fs.writeFile('./bye.txt', 'I am so cool', err => {
    if(err) throw err;
})

//to delete a file 
fs.unlink('./bye.txt',err => {
    if(err) throw err;
    console.log('file delete');
}

)