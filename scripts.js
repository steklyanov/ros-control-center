

let rbServer = new ROSLIB.Ros({
    url: 'ws://localhost:9090'

});

function getNode() {
    let detailClient = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/nodes',
        serviceType: 'rosapi/Nodes'
    });
    let request = new ROSLIB.ServiceRequest({});
    detailClient.callService(request, function (result) {
        splitNodes(result);
    });
}


function splitNodes(result) {
    console.log(result.nodes)
    result.nodes.forEach(function (item, index, arr) {
        getTopic(item);
    })
}

function getTopic(item, index) {
    let topicDetail = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/node_details',
        serviceType: 'rosapi/NodeDetails'
    })
    let request = new ROSLIB.ServiceRequest({
        node : item
    })

    console.log('for node '+ item +' available following topics')
    topicDetail.callService(request, function (result) {
        console.log(result);
        console.log(index);
    })
}

function createForm(title, body) {


}

