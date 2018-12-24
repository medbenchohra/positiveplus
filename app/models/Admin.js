import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    user_name : {
        type: String,
        required : 'firstname is requried'
    },

    password : {
        type: String,
        required : 'lastname is requried'
    },

    email : {
        type: String,
        required : 'age is requried'
    },

    Created_date: {
        type: Date,
        default: Date.now
    }
});

export {AdminSchema};