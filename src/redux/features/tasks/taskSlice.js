import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasksData"))
    ? JSON.parse(localStorage.getItem("tasksData"))
    : [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, ...payload });
        let storeTask = JSON.stringify(current(state.tasks));
        localStorage.setItem("tasksData", storeTask);
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          ...payload,
        });
        let storeTask = JSON.stringify(current(state.tasks));
        localStorage.setItem("tasksData", storeTask);
      }
    },
    removeSingleTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      const tasksListString = localStorage.getItem("tasksData");
      const tasksList = JSON.parse(tasksListString);
      const updatedTasksList = tasksList.filter((item) => item.id !== payload);
      const updatedTasksListString = JSON.stringify(updatedTasksList);
      localStorage.setItem("tasksData", updatedTasksListString);
    },
  },
});
export const { addTask, removeSingleTask } = taskSlice.actions;
export default taskSlice.reducer;
