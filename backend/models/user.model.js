const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:[3,"First name must be at least 3 characters long"],
    },
    lastname:{
        type:String,
        minlength:[3,"Last name must be at least 3 characters long"],
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String
    }
})

UserSchema.method.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}
UserSchema.method.comparePassword = async function(){
    return await bcrypt.compare(password,this.password);
}
UserSchema.method.hashPassword = async function(){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model("user",UserSchema);
module.exports = userModel;