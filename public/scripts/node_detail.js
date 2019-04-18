function getNodeDetail() {
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
    console.log(result.nodes);
    result.nodes.forEach(function (item) {

        getTopicDetail(item);
    })
}

function getTopicDetail(item) {
    let topicDetail = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/node_details',
        serviceType: 'rosapi/NodeDetails'
    });
    let request = new ROSLIB.ServiceRequest({
        node : item
    });

    topicDetail.callService(request, function (result) {
        node_array[item] = result;
        result.publishing.forEach(function (elem) {
            getTopicMessageTypeSub(elem, item)
        });
        result.subscribing.forEach(function (elem) {
            getTopicMessageTypePub(elem, item)
        });
        result.services.forEach(function (elem) {
            getServiceMessageType(elem, item)
        })
    })
}

function getTopicMessageTypeSub(item, name) {
    let messageType = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/topic_type',
        serviceType: 'rosapi/TopicType'
    });
    // console.log(item, index)
    let request = new ROSLIB.ServiceRequest({
        topic : item
    });
    messageType.callService(request, function (result) {
        node_array[name]['subscribing'][item] = result.type;
    })

}

function getServiceMessageType(item, name) {
    let messageType = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/service_type',
        serviceType: 'rosapi/ServiceType'
    });
    // console.log(item, index)
    let request = new ROSLIB.ServiceRequest({
        service : item
    });
    messageType.callService(request, function (result) {
        node_array[name]['services'][item] = result.type;
    })

}

function getTopicMessageTypePub(item, name) {
    let messageType = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/topic_type',
        serviceType: 'rosapi/TopicType'
    });
    // console.log(item, index)
    let request = new ROSLIB.ServiceRequest({
        topic : item
    });
    messageType.callService(request, function (result) {
        node_array[name]['publishing'][item] = result.type;
    })
}

function postNodeDetail() {
    console.log(node_array);
    createForm(node_array);
}

function createForm(node_array) {
    for (key in node_array) {
        createTopic(node_array[key]);
    }
}

function createTopic(node_list) {
    let container = document.createElement('div')

    for (node in node_list) {

    }

}

function createMessage(title, body) {
    // (1)
    var container = document.createElement('div')

    // (2)
    container.innerHTML = '<div class="my-message"> \
    <div class="my-message-title">'+title+'</div> \
    <div class="my-message-body">'+body+'</div> \
    <input class="my-message-ok" type="button" value="OK"/> \
  </div>'

    // (3)
    return container.firstChild
}
