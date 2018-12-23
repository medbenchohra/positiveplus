import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name : {
        type: String,
        required : 'firstname is requried'
    },

    description : {
        type: String,
        required : 'lastname is requried'
    },

    
});

export {ActivitySchema};
