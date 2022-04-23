import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodos
} from './counterSlice';
// import styles from './Counter.module.css';

export function Form() {
  // const count = useSelector();
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState();

  const inputTextHandler=(e) =>{
    setInputText(e.target.value);
}
const submitTodoHandler = (e) =>{
    e.preventDefault();
    dispatch(addTodos(
      // ...todos means that if there are any todos - pass them along,
// as wthat after coma we spacify what's next
        
        {text:inputText, completed:false, id: Math.random() *1000}
    ));
    setInputText("");
};
// const statusHandler = (e) => {
//   setStatus(e.target.value)
// }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button  onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select  name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
