const User = require('./user')
const router = require('express').Router()

router.get('/' , User.render)
router.get('/show' , User.show)
router.post('/store' , User.store)


module.exports = (app)=> app.use('/user' , router) 