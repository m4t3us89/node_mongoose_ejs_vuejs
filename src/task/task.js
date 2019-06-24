const path = require('path')

class Task{
    async show(req,res){
        return res.render(path.join(__dirname, 'views' , 'show'))
    }
}

module.exports = new Task()