import { createSlice } from '@reduxjs/toolkit';

let initialState = []
 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
    

  reducers: {
    addTodos(state, action){
  
        state.push(action.payload)

  },
  changeStatus(state, action){
    const{id}=action.payload
// const existingPost = state[id] - to jest jakis skrot, 
// w ogole nie szuka tego posta
    const existingPost = state.find(post=> post.id===id)
    console.log(existingPost.completed)
    if(existingPost){
    existingPost.completed = !existingPost.completed
    }

  },
  deleteItem(state,action){
const{id}=action.payload
// console.log(id)
const existingPost = state.filter(post=> post.id !==id)
// console.log(existingPost)
if(existingPost){
return existingPost}
  },
  saveLocalStorageIntoState(state,action){
const blah = action.payload.map(item=>state.push(item))
  }
}})

export const { addTodos,changeStatus,deleteItem, saveLocalStorageIntoState } = counterSlice.actions;


// export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
