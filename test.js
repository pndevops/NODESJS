//const express = require('express');
//const app = express();
//const port = 3000; // Change this to your desired port

//app.get('/', (req, res) => {
//  res.send('welcome to Node JS project!');
//});


const express = require('express');
const app = express();

// Your Express application configuration and routes go here

const port = process.env.PORT || 3000; // You can change the port as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


