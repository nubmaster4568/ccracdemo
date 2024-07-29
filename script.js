// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can change this port if needed

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Change 'index.html' if your main file has a different name
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
