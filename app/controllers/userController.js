import mongoose from 'mongoose' ;

import UserSchema from "../models/User";

//const user = mongoose.model('user',userSchema);

const User = mongoose.model('User',UserSchma);


const getProfile = (req, res) => {
    User.find({ _id:req.params.iduser}, (err,users)=> {
        if(err) res.send(err)
        res.json(users)
       })
    
}

export const joindreGroupe = (req,res)=> {
 
 User.findOneAndUpdate(
    {_id: req.params.idUser}, { $set: { groupe: req.body.groupe } },
    (err, User) => {
        if(err) res.send(err)
        res.json(User)
    }
)
}


const updateUser = (res,req) => {
    db.User.findOneAndUpdate(
        {_id: req.params.idUser},
        req.body,
        (err, User) => {
            if(err) res.send(err)
            res.json(User)
        }
    )

};

const deleteUser = (res,req) => {
    User.remove(
        {_id: req.params.idUser},
        (err) => {
            if(err) req.send(err)
            res.json();
        }
    )
};

const getUser = (req, res) => {
   User.find({_id: req.params.idUser},(req,users)=> 
   { if(err) res.send(err)
    res.json(users)
   })
}

const addUser = (req,res)=>{
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err) res.send(err)
        res.json(user);
    })
    
}



export { getUser,updateUser, addUser, deleteUser ,getProfile}