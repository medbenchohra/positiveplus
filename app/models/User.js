import mongoose from 'mongoose';

const Schema = mongoose.Schema;

import DefiSchema from './Defi'
import TodoSchema from './TodoList'
import GroupeSchema  from './Groupe';

const UserSchema = new Schema({
    name : {
        type: String,
        required : 'name is requried'
    },

    pseudo : {
        type: String,
        required : 'pseudo is requried'
    },

    email : {
        type: String,
        required : 'lastname is requried'
    },

    
    Created_date: {
        type: Date,
        default: Date.now
    },
    
    defis : {type : DefiSchema}  ,
    //defi : [DefiSchema]

    groupes :   { type : GroupeSchema } ,

    todoList : { 
        type : TodoSchema 
    }
  

});

export {UserSchema};
