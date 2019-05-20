var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});

app.listen(5080);