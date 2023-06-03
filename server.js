const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8889;

// Serve static files from the root directory
app.use(express.static(__dirname));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main-page.html'));
});

// Define a route to handle the form page
app.get('/form-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'form-page.html'));
});

// Define a route to handle form submissions
app.post('/submit.html', (req, res) => {
  

  // Send a response back to the client
  res.sendFile(path.join(__dirname, 'submit.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
