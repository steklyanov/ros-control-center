const config = require('../config/config')
const node_detail = require('../../public/scripts/new_node_detail')
const ROSLIB = require('roslib')

module.exports = {
    async get(req, res) {
        try {
            console.log('GET main backend')


        } catch (e) {
            console.log('error on main page', e)
        }
    },
    async post(req, res) {
        try {
            console.log('POST main backend:',req.body);
            console.log(req.body.ip);
            init(req.body.ip)

        } catch (e) {
            console.log('error on main page', e)
        }
    }
}

function init(ip_addres) {
    ip_addres = 'localhost';
    let str1 = 'ws://';
    mid = str1.concat(ip_addres);
    let str2 = ':9090';
    res = mid.concat(str2);
    ros = new ROSLIB.Ros({
        url: res
    });
    collect_data(ros);
}

function collect_data(ros) {
    let nodes;
    ros.getNodes(function (nodes) {
        console.log(nodes);
    });

}