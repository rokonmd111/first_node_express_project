const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('this is a test node express app');  
});

app.listen(3000);