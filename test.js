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
 
});

const interval = setInterval(() => { 
  console.log('Running...');    
    clearInterval(interval); // Stop the interval
    console.log('Stopped.');
    process.exit(0); // Terminate the Node.js process with exit code 0
 
}, 10000); 
