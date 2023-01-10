import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
//burada initialState todolardan oluşan bir dizi 

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //action normalde any gözüküyor "payloadaction type" ile ne tarz bir payload göndereceğimizi ayarladım
    // bu örneğimizde title  string olduğu için   <string> olarak belirtildi.
      add: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: v4(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, toggleCompleted } = todoSlice.actions;
