var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.send('yo');
});

app.listen(process.env.PORT || 8080);
