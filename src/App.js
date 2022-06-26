import React from 'react';
import { Form } from './features/todos/Form';
import TodoList  from './features/TodoList';
import './App.css';
 
import { useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {saveLocalStorageIntoState, filterTodos} from './features/todos/todosSlice'

function App() {

const dispatch = useDispatch()
const posts = useSelector(state => state.todos.todos)

// first render getTodosFromlocalstorage
// sets as state.todos.todos with local storage todos, 
// and dispatch(filterToodos) sets those todos to todos.todos.filters
useEffect(()=>{
  getTodosFromLocalStorage();
  dispatch(filterTodos('other'))
}, []);

// then any time state.todos.todos is changed since it is 
//  a depenency here (not state,todos.filters) the dispatch(filterTodos)
// sets todos from state.todos.todos init state.todos.filters and that
// allows us to use state.todos.filters for loading todos into TodoList
useEffect(()=>{
  saveTodosToLocalStorage();
  dispatch(filterTodos('other'))
  },[posts]
);

// what is local storage can only be saved as string that why stringify
const saveTodosToLocalStorage = () => {
  localStorage.setItem("posts", JSON.stringify(posts));
}; 

const getTodosFromLocalStorage = ()=>{
    if(localStorage.getItem("posts")===null){
      localStorage.setItem("posts", JSON.stringify([]));
    }else{
      let blah = JSON.parse(localStorage.getItem("posts"));
      dispatch(saveLocalStorageIntoState(blah))
    }
  };
 
console.log(posts);

  return (
    <div className="App">
      <header>
        <h1>To-Do List (Redux)
        </h1>
      </header>
      <Form   />
      <TodoList  />
    </div>
  );
}

export default App;