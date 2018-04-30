var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile('/');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running.');
});
