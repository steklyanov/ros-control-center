const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;
console.log(__dirname);

app.use('/css', express.static(__dirname + '/scripts'));
app.use('/js', express.static(__dirname + '/styles'));
app.use('/', router);

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));