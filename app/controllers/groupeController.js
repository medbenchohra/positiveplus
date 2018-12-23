import mongoose from 'mongoose' ;

import UserSchema from "../models/Groupe";

//const user = mongoose.model('user',groupeSchema);

const Groupe = mongoose.model('Groupe',GroupeSchma);


const getGroupe = (req, res) => {
    User.find({ _id:req.params.idUser},
        {groupes = req.body } ,
         (err,Groupes)=> {
        if(err) res.send(err)
        res.json(Groupes)
       })
    
}


const updateAdminGroupe = (res,req) => {
    User.findOneAndUpdate(
        {_id: req.params.idUser},
        req.body,
        (err, Groupe) => {
            if(err) res.send(err)
            res.json(Groupe)
        }
    )

};

const deleteGroupe = (res,req) => {
    Groupe.remove(
        {_id: req.params.idGroupe},
        (err) => {
            if(err) req.send(err)
            res.json();
        }
    )
};

const getGroupe = (req, res) => {
    Db.Groupe.find({_id: req.params.idGroupe},(req,Groupes)=> 
   { if(err) res.send(err)
    res.json(Groupes)
   })
}

const addGroupe = (req,res)=>{
    const newGroupe = new Groupe(req.body);
    newGroupe.save((err, Groupe) => {
        if(err) res.send(err)
        res.json(Groupe);
    })
    
}




export { getGroupe,updateAdminGroupe, addGroupe, deleteGroupe ,getGroupe}