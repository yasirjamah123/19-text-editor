const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Serve the manifest.json file from the 'public' directory
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'manifest.json'));
});
// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Other routes and server setup...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
