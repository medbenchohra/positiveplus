import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
   
    name: {
        type : string 
    },
    listTache :[TacheSchema] 

})