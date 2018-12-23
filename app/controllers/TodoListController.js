import mongoose from 'mongoose' ;

import TodoListSchema from "../models/TodoList";

//const TodoList = mongoose.model('TodoList',TodoListSchema);

const TodoList = mongoose.model('TodoList',TodoListSchma);


const updateTodoList = (res,req) => {

      TodoList.findOneAndUpdate(
        {_id: req.params.idTodoList}, 
        req.body,
        (err, TodoList) => {
            if(err) res.send(err)
            res.json(TodoList)
        }
    )

};

const deleteTodoList = (res,req) => {
    TodoList.remove(
        {_id: req.params.idTodoList},
        (err) => {
            if(err) req.send(err)
            res.json();
        }
    )
};

const getTodoList = (req, res) => {
    Db.TodoList.find({_id: req.params.idTodoList},(req,TodoLists)=> 
   { if(err) res.send(err)
    res.json(TodoLists)
   })
}

const addTodoList = (req,res)=>{
    const newTodoList = new TodoList(req.body);
    newTodoList.save((err, TodoList) => {
        if(err) res.send(err)
        res.json(TodoList);
    })
    
}





export { getTodoList,updateTodoList, addTodoList, deleteTodoList }