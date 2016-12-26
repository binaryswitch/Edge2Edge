var express = require('express')
var app = express()
var axios = require('axios')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Edge2Edge server')
})

app.get('/board', function (req, res){

    axios.get('https://edge2edge-db.firebaseio.com/public/users/0.json')
      .then(function (response) {
        res.send(response.data);

      })
      .catch(function (error) {
        console.log(error);
          res.send({"data":null, "message": ""+ error});

      });

})

app.get('/board/:boardId/pins', function (req, res){
    var jsonObj = {"pins": []};
    jsonObj.pins.push({"id": 0, "type": "png"});
    jsonObj.pins.push({"id": 1, "type": "png"});

    res.send({"data":{jsonObj}});
})


var port =  (process.env.PORT) ? process.env.PORT : 3001;

app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})
