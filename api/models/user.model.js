import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },

    avatar:{
        type: String,
        default: "https://play.google.com/store/apps/details?id=com.urappsltd.boysdp&hl=en_US"
      },

   
},{ timestamps : true });

const User = mongoose.model('User' , userSchema);

export default User;