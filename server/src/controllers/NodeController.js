const config = require('../config/config')

module.exports = {
    async index(req, res) {
        try {

            res.send('hello')
        } catch (err) {
            res.status(500).send({
                error: 'Bad thing'
            })

        }
    }
}


