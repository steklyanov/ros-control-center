const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(require('./routes/posts'))

const mongoose = require('mongoose')
mongoose.Promise = global.Promise // change mongoose promise
// to node.js native one

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))

const router = express.Router()
const Post = require('../models/post-model')

router.post('/posts', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            })
        }
    })
})

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))