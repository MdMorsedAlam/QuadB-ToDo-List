import { Box, Button, TextField } from "@mui/material";

const TaskInput = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const taskName = e.target.name.value;
    console.log(taskName);

    e.target.reset();
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handelSubmit}>
        <Box sx={{ display: "flex", gap: 4, justifyItems: "center" }}>
          <TextField label="Name" name="name" type="text" />
          <Button type="submit" variant="outlined">
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TaskInput;
