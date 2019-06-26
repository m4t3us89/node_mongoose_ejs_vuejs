const moongose = require('../config/database')
const bcrypt = require('bcrypt')

const User = new moongose.Schema({
    profile: {
        type:String,
        required: false,
    },
    first_name: {
       type: String,
       required: [true , 'Campo `first_name` é obrigatório' ]
    } ,
    last_name: {
        type: String,
        required: [true , 'Campo `last_name` é obrigatório' ]
    },
    email:{
        type: String,
        required: [true , 'Campo `email` é obrigatório' ],
        unique: true,
        lowercase: true,  
    },
    username: {
        type: String,
        required: [true , 'Campo `username` é obrigatório' ],
        unique: true,
    },
    password: {
        type: String,
        required: [true , 'Campo `password` é obrigatório' ],
        select: false,
    }
},{
    timestamps: true
})


User.pre('save' ,  async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password =  await bcrypt.hash(this.password, salt)
    return next()
})




module.exports = moongose.model('User', User)