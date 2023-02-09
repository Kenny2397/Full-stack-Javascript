// const { process } = require('process')

process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
})
process.on('uncaughtException', (err, origen) => {
  console.log('Vaya se nos escapó un error')
  console.log(err, origen)
  setTimeout(() => {
    console.log('Esta linea se va a mostrar')
  })
  
})

process.on('exit', () => {
  console.log('El proceso acabó')
  setTimeout(() => {
    console.log('Esta linea no se va a mostrar')
  })
})

function forzarError(){
  console.log(3+z)
}
forzarError()


