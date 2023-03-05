const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
// Port
const PORT = process.env.PORT || 3000;

// Cors
// const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://myapp.co'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   }
// }
// app.use(cors(options));


// Import middlewares errors, logs
const { LogErrors, BoomErrorHandler, OrmErrorHandler, ErrorHandler } = require('./middlewares/error.handler')

app.use(express.json(true), express.urlencoded({ extended: true }))
const RouterApi = require('./routes')

// Routes
app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

RouterApi(app)

// Use middlewares
app.use(LogErrors)
app.use(BoomErrorHandler)
app.use(OrmErrorHandler)
app.use(ErrorHandler)

app.listen(PORT, (err) => {
if(err) {
    console.info('Could not establish a connection to the server')
    console.error(err.message)
  }
  console.info('-------------- 🚀 Server running on ------------------')
  console.info(`INFO:     http://localhost:${PORT} (Press CTRL+C to quit)`)
  console.info('INFO:     Waiting for application startup.')
  console.info('INFO:     Application startup complete.')
})
