const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, 'localhost', () => {
  console.log(`Server is running on http://http://15.207.71.125/:${3000}`);
});
