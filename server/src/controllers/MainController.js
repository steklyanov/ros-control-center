const config = require('../config/config')
const node_detail = require('../../public/scripts/new_node_detail')
const ROSLIB = require('roslib')
var globals = require('../globals');

module.exports = {
    async get(req, res) {
        try {
            await console.log('GET main backend')


        } catch (e) {
            await console.log('error on main page', e)
        }
    },
    async post(req, res) {
        try {
            console.log('POST main backend:',req.body);
            await init(req.body.ip);
            await collect_data(globals.ros);
            await res.send(globals.nodes);
            // await res.send(globals.topics);
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
        // console.log(globals.ros);
    });
    globals.ros.on('error', function (error) {
        console.log("error on connection to ROS");
    });
}

async function collect_data(ros) {
    ros.getNodes(function (nodes) {
        globals.nodes = nodes;
        len = nodes.length;
        console.log(len);
        for (let i = 0; i < len; i++) {
            ros.getNodeDetails(nodes[i], function(data) {
                    // data[i] = i;
                    globals.topics[i] = Array.from(data);
                    console.log(Array.from(data));
            })
        }
        if (nodes)
            console.log('parse nodes');
        else
            console.log('cant get nodes');
    });
    await console.log(globals.topics);
}