import express from 'express';

const userRouter = express.Router();

import {register,
        login,
        updateUser,
        getUser,
        getUsers,
        deleteUser} from "../controllers/userController"


userRouter.post('/register',register);

userRouter.post('/login',login);

userRouter.put('/edit/:idUser',updateUser);

userRouter.delete('/delete/:idUser',deleteUser);

userRouter.get('/getUser/:idUser',getUser);

userRouter.get('/getUsers',getUsers);


export {userRouter}; 