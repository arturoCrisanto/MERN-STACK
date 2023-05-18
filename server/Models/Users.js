const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    age:{
        type: Number,
        required: true, 
    },
    username:{
        type: 'string',
        required: true,
    },
})
const UserModel = mongoose.model("users",UserSchema);
module.exports= UserModel;