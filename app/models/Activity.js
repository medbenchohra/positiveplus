import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ActivitySchema = new Schema({
    name : {
        type: String,
        required : 'name is requried'
    },

    description : {
        type: String,
      
    },

});

export {ActivitySchema};
