
function asincrona (callback){
  setTimeout(function() {
    try {
      let a = 3 + 2
      callback(null, a)
    } catch (error) {
      callback(error, null)      
    }
  }, 1000)
}

asincrona(function(err, dato){
  if (err) {
    console.error(err)
    return false
  }
  console.log(dato)

})