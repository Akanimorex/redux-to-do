import { createSlice } from '@reduxjs/toolkit';
import data from '../utils/data.json';

const initialState = {
    todoList: data

};

console.log(data);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveToDo: (state, action)=>{
        state.todoList.push(action.payload)
    }
  }
});

export const {saveToDo} = todoSlice.actions
export  const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer