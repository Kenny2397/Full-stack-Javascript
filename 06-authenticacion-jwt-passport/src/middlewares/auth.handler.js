const boom = require('boom')
const { config } = require('./../config/config')

function checkApiKey (req, res, next) {
  const apiKey = config?.apiKey ? req.headers[config?.apiKey] : false
  if (!req.headers[config?.apiKey]) {
    next(boom.unauthorized())
  }

  if (apiKey === '123') {
    next()
  } else {
    next(boom.unauthorized())
  }
}

module.exports = {
  checkApiKey
}
