import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name : {
        type: String,
        required : 'firstname is requried'
    },

    last_name : {
        type: String,
        required : 'lastname is requried'
    },

    email : {
        type: String,
        unique:true,
        required : 'email is requried'
    },

    password : {
        type : String,
        required: true
    },

    Created_date: {
        type: Date,
        default: Date.now
    }
});


export {UserSchema};
