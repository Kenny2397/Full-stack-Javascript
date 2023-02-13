const fs = require('fs')
const util = require('util')
const { Transform } = require("stream");

let data = ''
// let readableStream = fs.createReadStream(__dirname + '/input.txt')
// readableStream.setEncoding('utf-8')
// readableStream.on('data', function (chunk){
  // console.log(`-- chunk : ${chunk}`) 
  // console.log('--size: ' + chunk.length)
  // data += chunk  
// })

// readableStream.on('end', function (){
  // console.log(data)
  // console.log(`-- data : ${data}`)
  // console.log('size: '+ data.length) 
// })

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')


const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.pipe(upperCaseTransform).pipe(process.stdout);


