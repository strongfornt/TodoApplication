import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosValue: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    Add_Todo: (state, action) => {
      const existingTodo = state.todosValue.map(
        (item) => item.id === action.payload.id
      );
      if (existingTodo) {
        state.todosValue.push(action.payload);
      } else {
        state.todosValue = action.payload;
      }
    },
    deletTodo: (state, action) => {
      state.todosValue = state.todosValue.filter(
        (item) => item.id !== action.payload
      );

    },
    removeTodo: (state) => {
    
       state.todosValue=[];
      }
    },
  },
);
export const { Add_Todo, deletTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
