const express = require('express')
const router = express.Router()

const usercontroller = require('../Controller/user')

router.get('/user', usercontroller.index )

router.get('/user/:id', usercontroller.show)

  router.post('/user', usercontroller.store)
  
  router.put('/user/:id', usercontroller.update)

  router.delete('/user/:id', usercontroller.delete) 

  module.exports = router