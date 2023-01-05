import { createSlice } from '@reduxjs/toolkit';
import data from '../utils/data.json';

const initialState = {
    todoList:data

};



const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveToDo: (state, action)=>{
        state.todoList.push(action.payload)
    },
    delToDo(state, action){
        let copy = state.todoList;
        for (let i=0; i < copy.length; i++) {
            if (copy[i].id === action.payload) {
                 copy.pop(copy[i]);
                 
            }
        }
    }

  }
  
});

export const {saveToDo, delToDo} = todoSlice.actions
export  const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer