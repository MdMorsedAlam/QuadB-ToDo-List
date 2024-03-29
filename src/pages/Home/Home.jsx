import { Typography } from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";
import TaskInput from "../../components/TaskInput/TaskInput";

const Home = () => {
  return (
    <div>
      <Typography
        sx={{ fontSize: "45px", fontWeight: "bold", textAlign: "center" }}
      >
        To Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
