import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const TaskInput = () => {
  // dispatch use For Redux Oparations
  const dispatch = useDispatch();
  // This Function Use For Submit Data To Redux
  const handelSubmit = (e) => {
    e.preventDefault();
    const taskName = e.target.name.value;
    const taskDes = e.target.des.value;
    const taskData = { taskName, taskDes };
    dispatch(addTask(taskData));

    e.target.reset();
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handelSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyItems: "center",
          }}
        >
          <TextField sx={{ width: 500 }} label="Name" name="name" type="text" />

          <TextField
            sx={{ width: 500 }}
            label="Description"
            name="des"
            multiline
            rows={3}
          />

          <Button sx={{ width: 100 }} type="submit" variant="outlined">
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TaskInput;
