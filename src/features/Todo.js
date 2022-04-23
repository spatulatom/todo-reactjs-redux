import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus, deleteItem}  from './counter/counterSlice';

const Todo = ({text,id,completed}) => {

    const posts = useSelector(state => state.counter)
    const dispatch = useDispatch()
    
// Events
const deleteHandler = () =>{
//     // its filtring the state out of element that matches the id, and gets rid of that element
//     // console.log(todo)
    posts.map(el=> {
        if(el.id === id){
        dispatch(deleteItem({id}))
    }
    })}
    const completeHandler = () =>  {
        posts.map(item =>{
            if(item.id===id){
                // console.log(item.completed)
                dispatch(changeStatus({id}))
            }})}
//  when this added to trash button: onClick={adClas}, they 
// fall as the shoul but not removed from the state
    // const adClas = (e) =>{
    //     console.log("bla")
    //     const item = e.target;
    //     const todo = item.Element;
    //     todo.classList.add("fall");
    // }        
        
        
        
  return (
     <div className="todo" >
         <li className={`todo-item ${completed ? "completed" : ""}`} id={id}>{text}</li>
         <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
         <button  onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
     </div>
  );
};

export default Todo;