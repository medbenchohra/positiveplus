import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GroupeSchema = new Schema({

    name : {
        type : string 
    },
    confident: {

        type : string 
    }


})
