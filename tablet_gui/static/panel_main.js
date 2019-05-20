let ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

let robotClient = new ROSLIB.ActionClient({
    ros,
    serverName: '/courier_robot_order',
    actionName: 'backend/OrderAction'
});

let goal = new ROSLIB.Goal({
    actionClient: robotClient,
    goalMessage: {
        order_id : 1,
        pin_code : '1234'
    }
});

goal.on('feedback', function (feedback) {
    if (feedback.status == 'RideOutNew'){
        //    show ride out pic
        console.log(feedback.status);
    }
    else if (feedback.status == 'PinCodeOpenNew') {
        console.log(feedback.status);
    //    show pin pad panel
    }
    else if (feedback.status == 'GoingHome') {
        console.log(feedback.status);
        //    show going home page
    }

});

goal.on('result', function (result) {
    console.log(result);
});

goal.send();