import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
const store = configureStore({
  reducer: {
   tasksSlice: taskSlice,
  },
});

export default store;
