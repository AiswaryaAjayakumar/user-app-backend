var mongoose=require('mongoose')

var userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        addr:{
            type:String,Number,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        pin:{
            type:Number,
            required:true
        },
        mail:{
            type:String,Number,
            lowercase:true,

            required:true
        },
        ph1:{
            type:Number,
            required:true
        },
        ph2:{
            type:Number,
            required:true
        },
        usr:{
            type:String,
            required:true
        },
        ps1:{
            type:String,Number,
            required:true
        },
        ps2:{
            type:String,Number,
            required:true
        }
    }
)

var userModel= mongoose.model('users',userSchema)

module.exports={userModel}