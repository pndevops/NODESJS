const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}

// This is just an example to demonstrate the usage of process.exit()
const interval = setInterval(() => {
  
  console.log('Running...');
  
  // Condition to stop the interval
 
    clearInterval(interval); // Stop the interval
    console.log('Stopped.');
    // Terminate the Node.js process with exit code 0

}, 1000); // Runs every second (1000 milliseconds)
