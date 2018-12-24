import mongoose from 'mongoose' ;
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {UserSchema} from "../models/user";
import {error} from 'util';

const User = mongoose.model('User',UserSchema);



const register = (req,res) => {
    bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err) res.json(err)
        else {
            const user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
            })

            user.save((err, user) => {
                if(err) res.send(err)
                res.json(user);
            })
        }
    })   
};

const login = (req,res)=>{
 
    User.findOne({
        email:req.body.email
    })
    .then((user)=>{
        if(!user){
            res.redirect('/login')
        }
        else{
            bcrypt.compare(req.body.password, user.password, (err,result)=>{
                if(result){
                    console.log("password correct")
                    res.redirect('/home')
                }
                else{
                    res.send("poassword incorrect")
                    res.redirect('/login')
                }
            })
        }
    })

    
};

const updateUser = (res,req) => {
    User.findOneAndUpdate(
        {_id: req.params.idUser},
        req.body,
        (err, user) => {
            if(err) res.send(err)
            res.json(user)
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

const getUser = (req,res) =>{
    User.findOne(
        {_id: req.params.idUser},
        function(err,user)
        {
            if(err) res.send(err)
            res.json(user)
        }
    )
};

const getUsers = (req,res) => {
    User.find({}, (err,users)=>{
        if(err){
            res.send(err)
            next()
        }
        else 
        res.json(users)
    })
}

export {register, login, updateUser, deleteUser, getUser, getUsers}