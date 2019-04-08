

let rbServer = new ROSLIB.Ros({
    url: 'ws://localhost:9090'

});

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
    console.log(result.nodes)
    result.nodes.forEach(function (item, index, arr) {
        getTopicDetail(item, index);
    })
}

function getTopicDetail(item, index) {
    let topicDetail = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/node_details',
        serviceType: 'rosapi/NodeDetails'
    })
    // console.log(index)
    let request = new ROSLIB.ServiceRequest({
        node : item
    })

    topicDetail.callService(request, function (result) {
        console.log('for node '+ item +' available following topics')
        console.log(result);
        result.publishing.forEach(function (item) {
            getTopicMessageType(item, index)
        })
        result.subscribing.forEach(function (item) {
            getServiceMessageTypePub(item, index)
        })
        result.services.forEach(function (item) {
            getServiceMessageTypeSub(item, index)
        })
    })
}

function getTopicMessageType(item, index) {
    let messageType = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/topic_type',
        serviceType: 'rosapi/TopicType'
    })
    console.log(item, index)
    let request = new ROSLIB.ServiceRequest({
        topic : item
    })
    messageType.callService(request, function (result) {
        // console.log(item);
        // console.log(index);
        console.log('sub'+result, index);
    })

}

function getServiceMessageTypePub(item, index) {
    let messageType = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/service_type',
        serviceType: 'rosapi/ServiceType'
    })
    console.log(item, index)
    let request = new ROSLIB.ServiceRequest({
        service : item
    })
    messageType.callService(request, function (result) {
        // console.log(item);
        // console.log(index);
        console.log('pub'+result, index);
    })

}

function getServiceMessageTypeSub(item, index) {
    let messageType = new ROSLIB.Service({
        ros: rbServer,
        name: 'rosapi/service_type',
        serviceType: 'rosapi/ServiceType'
    })
    console.log(item, index)
    let request = new ROSLIB.ServiceRequest({
        service : item
    })
    messageType.callService(request, function (result) {
        // console.log(item);
        // console.log(index);
        console.log(result, index);
    })

}

function createForm(title, body) {

    var newDiv = document.createElement('div')
    newDiv.className = 'my-class'
    newDiv.id = 'my-id'
    newDiv.style.backgroundColor = 'red'

    newDiv.innerHTML = 'Привет, мир!'
    newDiv.appendChild()
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
