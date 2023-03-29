
function CustomError () {
  return (err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      next('Bad json file')
    }
    next(err)
  }
}

module.exports = {
  CustomError
}
