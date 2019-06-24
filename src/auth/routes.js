const Auth = require('./auth')
const router = require('express').Router()

router.get('/' , Auth.render)
router.post('/' , Auth.auth )


module.exports = (app)=> app.use('/auth' , router)