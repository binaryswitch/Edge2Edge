var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Edge2Edge server')
})

app.get('/board', function (req, res){
    var jsonObj = {"boards": []};
    jsonObj.boards.push({"id": 0, "name": "Board 0"});

    res.send(jsonObj);
})

var port =  (process.env.PORT) ? process.env.PORT : 3001;

app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})
