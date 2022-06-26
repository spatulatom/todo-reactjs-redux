import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { changeStatus, deleteItem}  from './todos/todosSlice';

const Todo = ({text,id,completed}) => {
    

const posts = useSelector(state => state.todos.todos)
const dispatch = useDispatch()
    
const deleteHandler = (event) =>{
   posts.map(el=> {
        if(el.id === id){
        dispatch(deleteItem({id}))
    }});   
}
    
const completeHandler = () =>  {
    posts.map(item =>{
        if(item.id===id){
            // console.log(item.completed)
            dispatch(changeStatus({id}))
        }})
    }

       
        
return (
    <div className="todo" >
        <li className={`todo-item ${completed ? "completed" : ""}`} id={id}>{text}</li>
        <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
        <button  onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
};

export default Todo;