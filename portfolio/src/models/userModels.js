import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName:{
    type:String,
    required:[true,"Please provide a Username."],
  },
  email:{
    type:String,
    required:[true,"Please provide a Email."],
    unique:true
  },
  password:{
    type:String,
    required:[true,"Please provide a Password."],
  },
  isVerified:{
    type:Boolean,
    default :false,
  },
  isAdmin:{
    type:Boolean,
    default :false,
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,

})

const User=mongoose.models.users||mongoose.model("users",userSchema);
export default User;