const express = require('express');

const app = express();

require('dotenv').config();

app.get('*', (req, res) => {
  res.send('hello'); // testing route
});

app.listen(process.env.PORT);
