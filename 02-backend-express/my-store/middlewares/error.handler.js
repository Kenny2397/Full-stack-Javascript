function LogErrors (err, req, res, next){
  console.log('----- Log errors ----')
  console.error(err.type)
  console.error(err.message)
  console.log('---------------------')
  next(err)
}

function BoomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

function ErrorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}


module.exports = {
  LogErrors,
  ErrorHandler,
  BoomErrorHandler
}
