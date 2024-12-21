import React from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useNavigate } from "react-router-dom";
import tasksData from "./ListTasks.jsx"; // Ensure this contains the list of tasks from ListTasks.jsx

const Account = () => {
  const navigate = useNavigate();

  // User data state
  const [userData] = React.useState({
    username: "JohnDoe",
    description: "Passionate coder and problem solver",
    avatar: "/path/to/avatar.jpg",
  });

  // Example tasks summary data
  const tasksSummary = {
    total: 4,
    completed: 0,
    easy: { total: 1, completed: 0 },
    medium: { total: 2, completed: 0 },
    hard: { total: 1, completed: 0 },
  };

  // Checking if tasksData exists and has the correct structure
  if (!tasksData || tasksData.length === 0) {
    console.error("No tasks data available");
  }

  return (
    <Box sx={{ padding: 2, backgroundColor: "#282c34", minHeight: "100vh" }}>
      {/* Back button */}
      <Button
        variant="contained"
        onClick={() => navigate("/tasks")}
        sx={{ marginBottom: 2, backgroundColor: "#61dafb", color: "#000" }}
      >
        Back to Tasks
      </Button>

      <Grid container spacing={2}>
        {/* Left section: Avatar, username, description */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              backgroundColor: "#3a3f47",
              color: "#fff",
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                alt={userData.username}
                src={userData.avatar}
                sx={{ width: 100, height: 100, marginBottom: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                {userData.username}
              </Typography>
              <TextField
                label="About Me"
                multiline
                rows={2}
                value={userData.description}
                fullWidth
                variant="outlined"
                slotProps={{
                  input: { readOnly: true },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiInputBase-input': { color: 'white' },
                }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Right section: Pie chart and summary */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              backgroundColor: "#3a3f47",
              color: "#fff",
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              {tasksSummary.total > 0 && (
                <PieChart
                  height={400} // Increased height
                  width={400} // Added width for better display
                  series={[
                    {
                      data: [
                        { label: "Easy", value: tasksSummary.easy.completed, color: "green" },
                        { label: "Medium", value: tasksSummary.medium.completed, color: "yellow" },
                        { label: "Hard", value: tasksSummary.hard.completed, color: "red" },
                      ],
                      innerRadius: 83,
                      outerRadius: 150,
                      arcLabel: (params) => params.label,
                    },
                  ]}
                  colors={["green", "yellow", "red"]}
                />
              )}
              <Typography variant="h6" gutterBottom>
                {tasksSummary.completed}/{tasksSummary.total} tasks completed
              </Typography>

              {/* Task difficulty summary */}
              <Box textAlign="center">
                <Typography sx={{ color: "green" }}>Easy</Typography>
                <Typography>
                  {tasksSummary.easy.completed}/{tasksSummary.easy.total}
                </Typography>
                <Typography sx={{ color: "yellow" }}>Medium</Typography>
                <Typography>
                  {tasksSummary.medium.completed}/{tasksSummary.medium.total}
                </Typography>
                <Typography sx={{ color: "red" }}>Hard</Typography>
                <Typography>
                  {tasksSummary.hard.completed}/{tasksSummary.hard.total}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom section: List of tasks */}
      <Box mt={4}>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            backgroundColor: "#3a3f47",
            color: "#fff",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Tasks
          </Typography>
          {tasksData && tasksData.length > 0 ? (
            tasksData.map((task, index) => (
              <Box key={index} sx={{ marginBottom: 1 }}>
                <Typography>
                  {task.title} - {task.difficulty}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography>No tasks available</Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Account;
