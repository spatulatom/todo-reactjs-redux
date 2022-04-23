import React from 'react';
import { Form } from './features/counter/Form';
import TodoList  from './features/TodoList';
import './App.css';
 
import { useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {saveLocalStorageIntoState} from './features/counter/counterSlice'
function App() {
  

  const dispatch = useDispatch()
  const posts = useSelector(state => state.counter)

  useEffect(()=>{
    getTodosFromLocalStorage();
  }, []);

  useEffect(()=>{
    saveTodosToLocalStorage();
    },[posts]
  );

  
// // what is local storage can only be saved as string that why stringify
  const saveTodosToLocalStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }; 


  const getTodosFromLocalStorage = ()=>{
    if(localStorage.getItem("posts")===null){
localStorage.setItem("posts", JSON.stringify([]));}
else{
     let blah = JSON.parse(localStorage.getItem("posts"));
      dispatch(saveLocalStorageIntoState(blah))
    }
  };
 
  console.log(posts);

  return (
    <div className="App">
      <header>
  <h1>Todo List</h1>
      </header>
      <Form   />
      <TodoList  />
    </div>
  );
}

export default App;