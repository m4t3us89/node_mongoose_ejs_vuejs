const User = require('./user')
const router = require('express').Router()
const verifyToken = require('../middlewares/verifyToken')


router.get('/' , User.render)
router.get('/show' , verifyToken, User.show)
router.post('/store' , verifyToken, User.store)


module.exports = (app)=> app.use('/user' , router) 