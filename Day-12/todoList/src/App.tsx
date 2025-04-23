import React, { useState, ChangeEvent} from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = (): void => {
    if (input.trim() !== "") {
      setTasks((prev) => [...prev, input]);
      setInput("");
    }
  };

  const deleteTask = (index: number): void => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };



  return (
    <Container  sx={{ maxWidth: 500, margin: 'auto', p: 2}}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          ToDo List
        </Typography>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Add a task..."
            variant="outlined"
            value={input}
            onChange={handleInputChange}
            
          />
          <Button variant="contained" onClick={addTask}>
            Add
          </Button>
        </div>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" color="error" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default App;
