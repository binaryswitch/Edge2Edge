var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Edge2Edge server')
})

app.get('/board', function (req, res){
    var jsonObj = {"boards": []};
    jsonObj.boards.push({"id": 0, "name": "Board 0"});

    res.send(jsonObj);
})

app.get('/board/:boardId/pins', function (req, res){
    var jsonObj = {"pins": []};
    jsonObj.pins.push({"id": 0, "type": "png"});
    jsonObj.pins.push({"id": 1, "type": "png"});

    res.send(jsonObj);
})


var port =  (process.env.PORT) ? process.env.PORT : 3001;

app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})
