function seRompe(){
  return 2+z
}

function otraFuncion(){
  seRompe()
}

function asyncfunction(callback){
  setTimeout( () => {
    try{
      return 3 + z
    }catch (err){
      callback(err)
    }
  })
}

try{
  // seRompe()
  // otraFuncion()
  asyncfunction(function(err) {
    console.log("error :", err.message)
  })
}catch(err) {
  console.log(err.message)
}
