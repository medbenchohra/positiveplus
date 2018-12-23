import express from 'express';

const userRouter = express.Router();

import {addUser,
        getUser,
        updateUser,
        deleteUser} from "../controllers/userController"


userRouter.post('/:idUser',addUser);
userRouter.get('/:idUser',getUser);
userRouter.put('/:idUser',updateUser);
userRouter.delete('/:idUser',deleteUser);

export {userRouter};