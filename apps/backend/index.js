require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Public GET route '/'
app.get('/', (req, res) => {
  res.json({ message: "Hello from Backend MVP!" });
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
