import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todosSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
