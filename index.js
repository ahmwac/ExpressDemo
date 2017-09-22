var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.get('/login', function (req, res) {
      res.sendFile(path + 'login.html', function (err){
  });
});

    app.post('/login', function(req, res){
        console.log(req.body.user);
        console.log(req.body.pass);
        
        if(req.body.user === 'aaw'){
            res.sendFile(path +'verysecret.html', function (err) {
            });
        }else{
            res.sendFile(path +'login.html', function(err){
        });

    }           
    });

  
  app.listen(3000, function () {
    //console.log('Example app listening on port 3000!')
  })
