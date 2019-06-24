const path = require('path')
const UserModel = require('./model')


class User{
    async render(req,res){
        return res.render( path.join(__dirname, 'views' , 'show') )
    }

    async show(req,res){
        try{
            const users = await UserModel.find()
            return res.status(201).json(users)
        }catch(err){
            return res.status(400).json(err)
        }
    }

    async store(req,res){
        
    }
}

module.exports = new User()