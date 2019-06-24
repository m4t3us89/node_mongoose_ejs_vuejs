const Task = require('./task')
const router = require('express').Router()

router.get('/' ,  Task.show)

module.exports = (app)=> app.use('/task' , router)