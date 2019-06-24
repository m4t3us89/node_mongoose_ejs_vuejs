const path = require('path')
const bcrypt = require('bcrypt')
const User = require('../user/model')
const jwt = require('jsonwebtoken')

class Auth{
    render(req,res){
        return res.render(path.join(__dirname, 'views' , 'auth'))
    }

    async auth(req,res){
        try{
            const {email,password} = req.body
            const user = await User.findOne({
                email
            }).select('+password')
           
            if(user){
               
                if(await bcrypt.compare( password, user.password )){

                    const token = jwt.sign({id:user._id}, 'shhhhh')
                    user.password = undefined
                    return res.status(201).json({user,token})

                }else 
                    return res.status(400).json({message:'Password incorreto.'})
                
            }else 
                return res.status(400).json({message:'Usuário não identificado.'})

           
        }catch(err){
            return res.status(400).json({message:'Password incorreto.'})
        }
    }
}

module.exports = new Auth()