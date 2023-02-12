let bufferContainer = Buffer.alloc(239)
const asciiObj = {}
for (let index = 0; index < bufferContainer.length; index++) {
  bufferContainer[index] = index
  // console.log(index.toString(''))
  // asciiObj[index] = index.

}

console.log(bufferContainer.toString('ascii'))
console.log(bufferContainer.toString('latin1'))