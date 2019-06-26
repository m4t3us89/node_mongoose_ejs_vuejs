const User = require('./user')
const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')


router.get('/' , User.renderShow)
router.get('/show' , verifyToken, User.show)

router.get('/store' , User.renderStore)
router.post('/store' , User.store)


module.exports = (app)=> app.use('/user' , router) 