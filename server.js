const express = require('express');
const app = express();
const port = 3000; // Or your desired port

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:3000');
});

