var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Edge2Edge server')
})

var port =  (process.env.PORT) ? process.env.PORT : 3001;

app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})
