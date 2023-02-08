function soyAsincrona() {
  console.log('Soy una funcoion asincrona')
  setTimeout(() => {
    console.log('Estoy siendo asincrona')
  }, 1000)
}

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre)
    miCallback(nombre)
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios, ' + nombre)
    otroCallback()
  }, 1000)
}

console.log('Iniciando Proceso')
hola('Kenny', function (nombre) {
  adios(nombre, function () {
    console.log('terminando Proceso')
  })
})
