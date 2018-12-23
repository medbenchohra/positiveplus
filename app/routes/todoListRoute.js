import express from 'express';

const todoListRouter = express.Router();

import {addtodoList,
        gettodoList,
        updatetodoList,
        deletetodoList} from "../controllers/todoListController"


todoListRouter.post('/:idtodoList',addTodoList);
todoListRouter.get('/:idtodoList',getTodoList);
todoListRouter.put('/:idtodoList',updateTodoList);
todoListRouter.delete('/:idtodoList',deleteTodoList);

export {todoListRouter};