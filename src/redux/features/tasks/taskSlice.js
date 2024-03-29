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
    // Add Task To Redux And LocalStorage
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
    // Remove Single Task From Redux And LocalStorage
    removeSingleTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      const tasksListString = localStorage.getItem("tasksData");
      const tasksList = JSON.parse(tasksListString);
      const updatedTasksList = tasksList.filter((item) => item.id !== payload);
      const updatedTasksListString = JSON.stringify(updatedTasksList);
      localStorage.setItem("tasksData", updatedTasksListString);
    },
    // Remove Multiple Task From Redux And LocalStorage
    removeMultipleTasks: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => !payload.includes(item.id));
      const tasksListString = localStorage.getItem("tasksData");
      const tasksList = JSON.parse(tasksListString);
      const updatedTasksList = tasksList.filter(
        (item) => !payload.includes(item.id)
      );
      const updatedTasksListString = JSON.stringify(updatedTasksList);
      localStorage.setItem("tasksData", updatedTasksListString);
    },
  },
});
export const { addTask, removeSingleTask, removeMultipleTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
