import mongoose from 'mongoose';

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
        required : 'lastname is requried'
    },

    Age : Number, 


    Created_date: {
        type: Date,
        default: Date.now
    }
});

export {UserSchema};
