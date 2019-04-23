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