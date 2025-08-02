const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all origins

// Dummy intern profile data
const intern = {
  name: "Shraddha Pandey",
  referralCode: "shraddha2025",
  donations: 3400
};

// Dummy leaderboard data
const leaderboard = [
  { name: "Shraddha Pandey", donations: 3400 },
  { name: "John Doe", donations: 2100 },
  { name: "Anita Sharma", donations: 1800 }
];

// API to get intern profile
app.get('/api/intern', (req, res) => {
  res.json(intern);
});

// API to get leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

