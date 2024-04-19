const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hola Paco! ');
  })

app.listen(3000);