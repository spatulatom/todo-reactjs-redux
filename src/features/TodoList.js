import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

// Import Components
import Todo from './Todo'


const TodoList = () => {

const posts = useSelector(state => state.todos.filters)

const renderedPosts = posts.map(post => (
  <Todo text={post.text}
  completed={post.completed} id={post.id} />
))
    
return (
  <div className="todo-container">
    <ul className="todo-list"> {renderedPosts} </ul>
  </div>
); 
}

export default TodoList;