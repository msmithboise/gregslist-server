let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    default: 'No Description Choose your own fate!'
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Car', schema)