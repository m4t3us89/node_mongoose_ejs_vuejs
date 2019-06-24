const path = require('path')
class Erro{
    show(req,res){
        return res.render(path.join(__dirname,'views','error'),req.params)
    }
}

module.exports = new Erro()