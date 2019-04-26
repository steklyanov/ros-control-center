const config = require('../config/config')

module.exports = {
    async get(req, res) {
        try {

        } catch (e) {
            console.log('error on main page', e)
        }
    },
    async post(req, res) {
        try {
            console.log('sended from front:',req.value)

        } catch (e) {
            console.log('error on main page', e)
        }
    }
}