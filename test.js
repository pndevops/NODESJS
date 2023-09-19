const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port

app.get('/', (req, res) => {
  res.send('welcome to Node JS project!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  apps.close()
});
