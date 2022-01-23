const express = require('express');

const app = express();

require('dotenv').config();

// connect to mongo
app.get('*', (req, res) => {
  res.send('hello'); // testing route
});

app.listen(process.env.PORT);
