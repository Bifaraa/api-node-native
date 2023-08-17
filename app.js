/** Pakages */
const express = require('express');
const config = require('config');

/** App configuration */
const app = express();
const port = config.get('server-port');

/** Methods */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const controller = require('./controller/logic/student.controller');

app.get('/students', (req, res, next) => {
  controller.getAll(req, res, next);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
