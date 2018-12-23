import mongoose from 'mongoose';

const Schema = mongoose.Schema;

import DefitSchema from './Defit'
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

    
    Created_date: {
        type: Date,
        default: Date.now
    }
    
    defits : [DefiSchema]
  

});

export {UserSchema};
