
let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000


//Connect to db
require('./server-assets/db/mlab-config')

//Register Middleware
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

// routes


let cars = require('./server-assets/routes/car-routes')
server.use('/api/cars', cars)



//starts server
server.listen(port, () => {
    console.log('Running on Port:', port)
  })