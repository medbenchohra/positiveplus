import mongoose from 'mongoose';
import  UserSchema  from './User';

const Schema = mongoose.Schema;

export const GroupeSchema = new Schema({

    name : {
        type : string 
    },
    confident: {
        type : string 
    },
    admin : {
        type : UserSchema 
    }


})
