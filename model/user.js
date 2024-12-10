const mongoose= require('mongoose')
const schema= mongoose.schema   

const blogSchema= new Schema({
    title: {
        type : String,
        unique : true
    },
    subtitle: {
        type : String,
        
    },
    description :{
        type: Text
    } ,
    image:{
        type: String
    }
})
const Blog=mongoose.model('blog', blogSchema)
module.exports= Blog