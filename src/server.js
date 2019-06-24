require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
var expressLayouts = require('express-ejs-layouts')

const app = express()

//PERMISSÃO DE ACESSO DE OUTRAS ORIGENS DIFERENTE DO MEU DOMÍNIO
app.use(cors())

//DEFINIR PARA QUE MINHA APLICAÇÃO POSSA ACEITAR REQUISIÇÕES DO TIPO ENCODED (FORM DATA)
app.use(express.urlencoded(
    {extended: true}
))


//LOG DAS REQUISIÇÕES NO CONSOLE
app.use(morgan('dev'))

//DEFINIÇÃO DE TEMPLATE
app.set('view engine', 'ejs')   
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)

//ARQUIVOS STATICOS
app.use(
    "/media",
    express.static(path.resolve(__dirname, "..", "tmp" , "media"))
);

app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp" , "files" , "js"))
);


require('./routes').forEach(router=>router(app))

app.listen(process.env.PORT || 3333)