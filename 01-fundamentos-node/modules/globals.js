// console.log(global);

let i = 0
console.log('Iniciando')
let intervalos = setInterval (function(){
  console.log('Hola')
  i++
  if (i === 3){
    clearInterval(intervalos)
  }
  // console.log(intervalos);
},1000)

setImmediate(function(){
  console.log('Holaaa')
})

console.log(process)

console.log(__dirname)
console.log(__filename)

global.miVariable = 'mivariable'
console.log(miVariable)

