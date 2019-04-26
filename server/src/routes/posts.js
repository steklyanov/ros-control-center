// const Post = require('../models/post-model')
const express = require('express')
const app = express();
const test = express.Router()

test.route('/').get(function (req, res) {
    res.send({
        nodes: "node"
    })
    console.log('Im on backend baby');
    return ('try')

});
module.exports = test;