ip_addres = 'https:/localhost';

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
