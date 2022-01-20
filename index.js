const express = require('express');

const app = express();

require('dotenv').config();

app.get('*', (req, res) => {
  res.send('hello'); // testing route
  // need endpoint to return json data
});

app.listen(process.env.PORT);
