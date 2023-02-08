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

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('Bla bla bla')
    callbackHablar()
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios, ' + nombre)
    otroCallback()
  }, 1000)
}

function conversar (nombre, veces, callback){
  if(veces > 0){
    hablar(function(){
      conversar(nombre, --veces, callback)
      })
  }else{
    adios(nombre, callback)
  }
}

// --
// callBack hell
console.log('Iniciando Proceso')
hola('Kenny', function(nombre){
  conversar(nombre, 5, function(){
    console.log('Terminando Proceso')
  })
})

// hola('Kenny', function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log('terminando Proceso')
//         })
//       })
//     })
//   })
// })
