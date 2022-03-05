const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome : {
        type:String,
        required: true,
        max: 100,
        min:5
    },
    email:{
        type:String,
        required:true,
        max:200,
        min:8
    },
    senha:{
        type:String,
        required:true,
        max:205,
        min:10
    },
    data:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema)