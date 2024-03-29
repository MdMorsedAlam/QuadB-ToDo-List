import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TaskList = () => {
  const [checked, setChecked] = React.useState([]);
  const { tasks } = useSelector((state) => state.tasksSlice);

  console.log(checked);
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
        {tasks.map((task, i) => (
          <ListItem key={i}>
            <ListItemButton
              sx={{ display: "flex", justifyContent: "space-between" }}
              role={undefined}
              onClick={handleToggle(i + 1)}
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
                <Button>
                  <Tooltip title="View" placement="top">
                    <CommentIcon />
                  </Tooltip>
                </Button>

                <Button>
                  <Tooltip title="Delete" placement="top">
                    <DeleteIcon />
                  </Tooltip>
                </Button>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
