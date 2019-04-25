const Post = require('../models/post-model')

const express = require('express')
const router = express.Router()

router.post('/test', (req, res) => {
    // const post = new Post({
    //     title: req.body.title,
    //     description: req.body.description
    // })
    // post.save((err, data) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.send({
    //             success: true,
    //             message: `Post with ID_${data._id} saved successfully!`
    //         })
    //     }
    // })
})