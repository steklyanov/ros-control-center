const express = require('express');
const  path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const config = require('./config/config');
app.use("/public", express.static(__dirname + "/public"));

const NodeController = require('./controllers/NodeController');
const MainController = require('./controllers/MainController');
app.get('/test', NodeController.index);
app.get('/main', MainController.get);
app.post('/main', MainController.post);
// mongoose.connection
// 	.once('open', () => {
// 		console.log(`Mongoose - successful connection ...`)
// 		app.listen(process.env.PORT || config.port,
// 			() => console.log(`Server start on port ${config.port} ...`))
// 	})
// 	.on('error', error => console.warn(error))

console.log(process.env.PORT);
app.listen(process.env.PORT || config.port,
	() => console.log(`Server start on port ${config.port} ...`));
