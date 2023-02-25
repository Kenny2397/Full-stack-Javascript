const { Pool } = require('pg')

const {config} = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI })
// const pool = new Pool({
//   host: config.dbHost,
//   port: config.dbPort,
//   user: config.dbUser,
//   password: config.dbPassword,
//   database: config.dbName
// })

module.exports = pool

