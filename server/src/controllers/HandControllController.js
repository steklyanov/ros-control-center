const config = require('../config/config');
const shell = require('shelljs');

module.exports = {
    async shell_comma(req, res) {
        try {
            shell.exec('./start.sh', {async:true}, function(code, stdout, stderr) {
                console.log('Exit code:', code);
                console.log('Program output:', stdout);
                console.log('Program stderr:', stderr);
            });
        } catch (e) {
            res.status(500).send({
                error: 'Something goes wrong'
            })
        }
    }
};