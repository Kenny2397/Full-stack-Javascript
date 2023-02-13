let suma1 = 0
console.time('bucle 1')
for (let index = 0; index < 200000000; index++) {
  suma1 += index
}
console.timeEnd('bucle 1')
console.log(suma1)


console.time('bucle async')
console.log('Empieza el proceso asincrono')
asincrona()
    .then(() => console.timeEnd('bucle async'))

function asincrona() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Termina el proceso asíncrono')
            resolve()
        }, 0)
    })
}


let suma2 = 0
console.time('bucle 2')
for (let index = 0; index < 4000000000; index++) {
  suma2 += index
}
console.timeEnd('bucle 2')
console.log(suma2)
