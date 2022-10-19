import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Import Components
import Todo from './Todo'


const TodoList = () => {

const filteredTodos = useSelector(state => state.todos.filters)


// without a key here when fall state was change true
// on one todo it was 'jumping' onto the next todo
const renderedPosts = filteredTodos.map(post => (
  <Todo text={post.text} key={post.id}
  completed={post.completed} id={post.id} />
))
    
return (
  <div className="todo-container">
    <ul className="todo-list"> {renderedPosts} </ul>
  </div>
); 
}

export default TodoList;