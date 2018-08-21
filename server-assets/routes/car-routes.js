const router = require('express').Router()
let Car = require('../models/Car')

//Get all or By ID Industry standard following REST conventions
router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    //FIND ALL
    Car.find({})
      .then(cars => {
        return res.send(cars)
      })
  }
  //FIND BY ID
  Car.findById(req.params.id)
    .then(car => {
      res.send(car)
    })
})

router.post('/', (req, res, next) => {
  let newCar = req.body
  Car.create(newCar)
    .then(car => {
      res.send(car)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  //Adding {new: true} causes return to be new object as opposed to old
  Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(newCar => {
      res.send(newCar)
    })
})

router.delete('/:id', (req, res, next) => {
  Car.findByIdAndRemove(req.params.id)
    .then(oldDeletedCar => {
      res.send('DELORTED')
    })
})




module.exports = router