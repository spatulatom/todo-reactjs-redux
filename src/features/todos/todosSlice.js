import { createSlice } from '@reduxjs/toolkit';

let initialState={
  todos: [],
  filters:[]
};
 
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
    
  reducers: {

    addTodos(state, action){
      state.todos.push(action.payload)
    },
  
    changeStatus(state, action){
      const{id}=action.payload
      // const existingPost = state[id] -
      const existingPost = state.todos.find(post=> post.id===id)
      console.log(existingPost.completed)
      if(existingPost){
        existingPost.completed = !existingPost.completed
      }
    },

    deleteItem(state, action){
      const{id} = action.payload;
      state.todos= state.todos.filter(post=> post.id !==id);
    },

    saveLocalStorageIntoState(state,action){
      const blah = action.payload.map(item=>state.todos.push(item))
    },

    filterTodos(state, action){
      switch(action.payload.value){
        case 'completed':
          state.filters = state.todos.filter(todo=>todo.completed===true)
          break;
        case 'uncompleted':
          state.filters = state.todos.filter(todo=>todo.completed===false)
          break;
        default:
          state.filters = state.todos;
          break;
        }
    }
}})

export const { addTodos, changeStatus, deleteItem, saveLocalStorageIntoState,filterTodos} = todosSlice.actions;
export default todosSlice.reducer;


// this delete method is returning a proxy object only when initialState is an object(that can not be mapped through) why?:
// https://stackoverflow.com/questions/70391063/when-i-filter-the-cart-the-reducer-function-return-proxy-only-in-redux-toolkit/72762758#72762758,
// Error: [Immer] An immer producer returned 
// a new value *and* modified its draft. Either return a new value *or* modify the draft. - maybe this
// is an answer that below im trying to return a draft by going: return existingPost
    // deleteItem(state, action){
    //   const{id} = action.payload;
    //   const existingPost = state.todos.filter(post=> post.id !==id)
    //   console.log('DELETE iTEM', existingPost)
    //   if(existingPost){
    //     return existingPost}
    //   },
