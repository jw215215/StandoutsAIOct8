// server.js
const express = require('express');
const path = require('path');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the docs folder
app.use(express.static(path.join(__dirname, 'docs')));

// Route for the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});