const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use("/public", express.static(__dirname + "/public"));
app.use('/', require('./routes/index'));
app.set('view engine', 'pug');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));