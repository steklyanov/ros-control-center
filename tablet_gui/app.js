var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

// viewed at http://localhost:8080
app.get('/gui_panel', function(req, res) {
    res.sendFile(path.join(__dirname + '/gui_panel.html'));
});
app.get('/robot_panel', function(req, res) {
    res.sendFile(path.join(__dirname + '/gui_robot.html'));
});

app.listen(5080,
    () => console.log(`Server start on port 5080 ...`));