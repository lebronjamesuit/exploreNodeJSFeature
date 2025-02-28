

const fs = require('node:fs')

let  content = fs.readFileSync('./input.txt','utf-8')
console.log(content)

fs.writeFileSync('./output.txt','this is the write message')
