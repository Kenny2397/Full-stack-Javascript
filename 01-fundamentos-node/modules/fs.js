const fs = require('fs')

function leer(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    callback(data.toString())
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.log('No he podido leer el archivo')
    }
    else {
      console.log('Se ha escrito correctamenete')
    }
    cb(ruta, console.log)
  })
}

function borrar(ruta, cb){
  fs.unlink(ruta, err => {
    if(err) throw err
    console.log('El archivo se borró de forma exitosa')
  })
}

console.log(__dirname)
// leer(__dirname + '/archivo.txt', console.log)

escribir(__dirname + '/archivo.txt', 'soy un archivo nuevo', leer)
// borrar(__dirname + '/archivo.txt')