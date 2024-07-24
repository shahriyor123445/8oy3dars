// import { createSlice } from "@reduxjs/toolkit";


// const todoSlice = createSlice({
//   initialState: {
//     list: [],
//     text: "hello",
//     checked: false,
//   },
//   name: "todo",
//   reducers: {
//     addTodo: (state, action) => {
//       state.list = [action.payload, ...state.list];
//     },
//     deleteTodo: (state, action) => {
//       state.list = state.list.filter((todo) => todo.id !== action.payload);
//       message.info("O`chirildi");
//     },
//     checkTodo: (state, action) => {
//       state.list = state.list.map((todo) =>
//         todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
//       );
//     },
//     saveTodo: (state, action) => {
//       state.list = state.list.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, title: action.payload.title }
//           : todo
//       );
//     },
//   },
// });

// export const { addTodo, deleteTodo, checkTodo, saveTodo } = todoSlice.actions;
// export default todoSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
    },
    saveTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, checkTodo, saveTodo } = todoSlice.actions;
export default todoSlice.reducer;

