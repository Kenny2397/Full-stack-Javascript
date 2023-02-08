
function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre)
      resolve(nombre)
    }, 1000)
  });
}

function hablar(nombre) {
  return new Promise(function(resolve, reject){
    setTimeout(function () {
      console.log('Bla bla bla')
      resolve(nombre)
    }, 2000)
  })
}

function adios(nombre) {
  return new Promise(function(resolve, reject){
    setTimeout(function () {
      console.log('Adios, ' + nombre)
      resolve(nombre)
    }, 1000)
  })
}

console.log('Iniciando el proceso');
hola('Kenny')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(res => {
    console.log('Terminando el proceso')
  })
  .catch(err => console.error(err))





