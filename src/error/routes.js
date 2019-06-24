const router = require('express').Router()
const Erro = require('./error')

router.get('/:cod' , Erro.show)

module.exports = (app)=>app.use('/error' , router)