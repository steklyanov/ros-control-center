let ros = new ROSLIB.Ros({
    url: 'ws://10.0.1.25:9090'
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
        pin_code : '0110'
    }
});

goal.on('feedback', function (feedback) {
    console.log(feedback);
    if (feedback.status == 'RideOutNew'){
        image.src = "RideOutNew.png";
    }
    else if (feedback.status == 'PinCodeOpenNew') {
        image.src = "PinCodeOpenNew.jpg";
    }
    else if (feedback.status == 'GoingHome') {
        image.src = "GoingHome.png";
    }

});

goal.on('result', function (result) {
    console.log(result);
});
window.onload = () => {
    start_button = document.getElementById("start_btn");
    start_button.disabled = false;
    start_button.style.display = 'block';
    start_button.addEventListener("click", () => {
        goal.send();
        start_button.disabled = true;
        start_button.style.display = 'none';
    });
    image = document.getElementById("bg");
};


// Server for filling container
