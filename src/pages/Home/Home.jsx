import { Typography } from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";
import TaskInput from "../../components/TaskInput/TaskInput";

const Home = () => {
  return (
    <div>
      {/* This Is The Title */}
      <Typography
        sx={{
          fontSize: "45px",
          color: "#1976D2",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        To Do List
      </Typography>
      {/* This Is Task Input Component */}
      <TaskInput />
      {/* This Is Task List Component */}
      <TaskList />
    </div>
  );
};

export default Home;
