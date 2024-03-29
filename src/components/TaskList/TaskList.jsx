import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeSingleTask } from "../../redux/features/tasks/taskSlice";
import TaskDetails from "./TaskDetails";

const TaskList = () => {
  const [checked, setChecked] = React.useState([]);
  const { tasks } = useSelector((state) => state.tasksSlice);
  const [open, setOpen] = React.useState(false);
  const [taskId, setTaskId] = React.useState(0);
  const dispatch = useDispatch();
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handelSingleTask = (id) => {
    setTaskId(id);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          border: "1px solid #1976D2",
          padding: 8,
          borderRadius: "8px",
          bgcolor: "background.paper",
        }}
      >
        {tasks.map((task) => (
          <ListItem key={task}>
            <ListItemButton
              sx={{ display: "flex", justifyContent: "space-between" }}
              role={undefined}
              onClick={handleToggle(task)}
              dense
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(task) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <Typography>{task.taskName}</Typography>
              </Box>
              <Box>
                <Button onClick={() => handelSingleTask(task.id)}>
                  <Tooltip title="View" placement="top">
                    <CommentIcon />
                  </Tooltip>
                </Button>

                <Button onClick={() => dispatch(removeSingleTask(task.id))}>
                  <Tooltip title="Delete" placement="top">
                    <DeleteIcon />
                  </Tooltip>
                </Button>
                <TaskDetails setOpen={setOpen} open={open} taskId={taskId} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
