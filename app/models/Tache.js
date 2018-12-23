import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const  TacheSchema = new Schema({
    name : {
        type : string ,
        required : 'nom required '

    },
    etat : {
        type : string ,
    }
})