const config = require('../config/config')
const node_detail = require('../../public/scripts/new_node_detail')
const ROSLIB = require('roslib')
var globals = require('../globals');

module.exports = {
    async get(req, res) {
        try {
            await console.log('GET main backend');
            res.send(globals.nodes);


        } catch (e) {
            await console.log('error on main page', e)
        }
    },
    async post(req, res) {
        try {

            // await collect_data(globals.ros);
            // await console.log(globals.nodes);
            // await res.send(globals.nodes);
            // await res.send({user: "from back to front from post"});
        } catch (e) {
            console.log('error on main page', e)
        }
    }
}

async function init(ip_addres) {
    ip_addres = 'localhost';
    let str1 = 'ws://';
    mid = str1.concat(ip_addres);
    let str2 = ':9090';
    res = mid.concat(str2);
    globals.ros = new ROSLIB.Ros({
        url: res
    });
    globals.ros.on('connection', function() {
        console.log('globals.ros');
    });
    globals.ros.on('error', function (error) {
        console.log("error on connection to ROS");
    });
    return (global.ros);
}

// async function collect_data(ros) {
//     ros.getNodes(function (nodes) {
//         globals.nodes = nodes;
//         len = nodes.length;
//         return (nodes);
//     });
// }