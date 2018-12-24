import express from 'express';

const userRouter = express.Router();

import {addUser,
        getUser,
        updateUser,
        deleteUser} from "../controllers/userController"


userRouter.post('/',addUser);
userRouter.get('/',getUser);
userRouter.put('/',updateUser);
userRouter.delete('/?idUser',deleteUser);

export {userRouter};