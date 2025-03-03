

const fs = require('node:fs')

let contentAsync = fs.readFile('./input.txt', 'utf-8', (err, data)=> {
    if(err){
        return console.log('Err reading file', err);
    }
    console.log(data)
    const textout = `this is the write message ${data}`
    fs.writeFileSync('./output.txt', textout)
});

console.log('after asyn load file')



