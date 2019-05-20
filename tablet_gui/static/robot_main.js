// let ros = new ROSLIB.Ros({
//     url: 'ws://localhost:9090'
// });

var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/courier_robot_display_screen',
    messageType : 'std_msgs/String'
});

listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
   if (message.data === 'OrderDelivery') {
   //    screen hurry
   }
    // listener.unsubscribe();
});

// Server for filling container
OrderActServer = new ROSLIB.SimpleActionServer({
    ros,
    serverName: 'place_order_act_server',
    actionName: 'backend/LidAction'
});

OrderActServer.on("goal", () =>{
    let button = document.getElementById("button");
    button.addEventListener("click", () => OrderActServer.setSucceeded({result: "Close_lid"}), false);
});

// Server for input pincode
PinCodeServer = new ROSLIB.SimpleActionServer({
    ros,
    serverName: 'courier_robot_display_get_pin_code',
    actionName: 'backend/PinCodeAction'
});

PinCodeServer.on("goal", (goal) =>{
    let button = document.getElementById("pin_confirm");
    button.addEventListener("click", () => {
        let input = document.getElementById("pinpad");
        console.log("what i came with");
        console.log(typeof goal.pin_code);
        console.log(goal.pin_code);
        console.log(+goal.pin_message === +input.value);
        console.log(typeof input.value);
        console.log(input.value);

        if (goal.pin_message === input.value) {
            PinCodeServer.setSucceeded({result: "true"}); }
        else {
            PinCodeServer.setSucceeded({result: "false"}); }

})
});