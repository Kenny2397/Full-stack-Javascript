// Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
// Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
// En la consola, los datos se muestran en formato hexadecimal.

  

let buffer1 = Buffer.alloc(15, 'Hola mundo')
let buffer2 = Buffer.from([1,2,3,4])
let buffer3 = Buffer.from('Hola')

console.log(buffer1)
console.log(buffer1.toString())
// console.log(buffer2)
console.log(buffer3)
console.log(buffer3.toString())

let abc = Buffer.alloc(26)
console.log(abc)

for (let index = 0; index < abc.length; index++) {
  abc[index] = index + 97
}

console.log(abc)
console.log(abc.toString())
















