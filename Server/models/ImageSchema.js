const mongoose = require('mongoose')
const Imageschema =new mongoose.Schema({
    type:{
        type:String
    },
    select:{
        type:String
    },
    tags:{
        type:String
    },
    img:{
        data:Buffer,
        contentType:String
    }
})

const ImageSchema = mongoose.model("Image",Imageschema)
module.exports = {ImageSchema}