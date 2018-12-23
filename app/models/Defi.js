import mongoose from 'mongoose';

const Schema = mongoose.Schema;
import UserSchema from './User'
const  DefiSchema = new Schema({

    defi : {
        nom :{
        type: string 
        },
        etat :{
            type : string 
        },
        visibilite : {
            type : string ,
        }
        type : {
            type : string //personnel ou groupe
        }

        //redondante mais je m'en fou Hhahahahahahahahahah
        users :[UserSchema]

    
    }

})
export { DefiSchema }