import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  removeMultipleTasks,
  removeSingleTask,
} from "../../redux/features/tasks/taskSlice";
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
  const handelMultipleDelete = () => {
    dispatch(removeMultipleTasks(checked));
    setChecked([]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          border: "1px solid #1976D2",
          padding: 5,
          borderRadius: "8px",
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
          }}
        >
          <Typography>
            {checked.length > 0 ? `${checked.length} Item Selected` : ""}
          </Typography>
          <Button
            disabled={checked.length < 2}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handelMultipleDelete}
          >
            Delete
          </Button>
        </Box>
        <List
          sx={{
            paddingY: 2,
          }}
        >
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "space-between" }}
                role={undefined}
                onClick={handleToggle(task.id)}
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
                    checked={checked.indexOf(task.id) !== -1}
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

                  <Button
                    color="error"
                    onClick={() => dispatch(removeSingleTask(task.id))}
                  >
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
    </Box>
  );
};

export default TaskList;
