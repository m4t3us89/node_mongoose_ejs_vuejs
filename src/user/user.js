const path = require('path')
const UserModel = require('./model')


class User{
    renderShow(req,res){
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

    renderStore(req,res){
        return res.render( path.join(__dirname, 'views' , 'store') )
    }

    async store(req,res){
        try{
            const user = await UserModel.create(req.body)
            user.password = undefined
            return res.status(201).json(user)
        }catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = new User()