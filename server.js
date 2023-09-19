const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port

// Define a route for the root URL ("/")
app.get('pages/api/hello', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
