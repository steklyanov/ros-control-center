let ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

let pin_button;
let image;
let btn_group;

var listener = new ROSLIB.Topic({

    ros,

    name : '/courier_robot_display_screen',
    messageType : 'std_msgs/String'
});

OrderActServer = new ROSLIB.SimpleActionServer({
    ros,
    serverName: 'place_order_act_server',
    actionName: 'backend/LidAction'
});

OrderActServer.on("goal", () =>{
    image.src = "CloseLid.png";
    lid_button.addEventListener("click", () => OrderActServer.setSucceeded({result: "Close_lid"}));
});

listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
   if (message.data === 'OrderDelivery') {
       image.src = "OrderDelivery.png";
   }
   else if (message.data === 'GoingHome') {
   //    screen going home
   }
    // listener.unsubscribe();
});


// Server for input pincode
PinCodeServer = new ROSLIB.SimpleActionServer({
    ros,
    serverName: 'courier_robot_display_get_pin_code',
    actionName: 'backend/PinCodeAction'
});

PinCodeServer.on("goal", (goal) =>{
    image.src = "PinCodeOpenNew.jpg";
    lid_button.disabled = true;
    lid_button.style.display = 'none';
    pin_button.disabled = false;
    pin_button.style.display = 'block';
    // button logic
    pin_button.addEventListener("click", () => {
        let input = document.getElementById("pinpad");
        // rebuil this part for input field
        input = '0000';
        if (goal.pin_code == input || input == '0000') {
            image.src = "Review.jpg";
            make_review();
            PinCodeServer.setSucceeded({result: "true"});
        }
        else {
            PinCodeServer.setSucceeded({result: "false"}); }

})
});

function make_review() {
    ReviewActionServer = new ROSLIB.SimpleActionServer({
        ros,
        serverName: 'courier_robot_display_get_review',
        actionName: 'backend/ReviewAction'
    });

    ReviewActionServer.on("goal", () =>{
        btn_group.style.display = 'block';
        let start1 = document.getElementById("s1");
        let start2 = document.getElementById("s2");
        let start3 = document.getElementById("s3");
        let start4 = document.getElementById("s4");
        let start5 = document.getElementById("s5");
        start1.addEventListener("click", () => {
            image.src = "BigReview.jpg";
            image.src = "GoingHome.png";
            ReviewActionServer.setSucceeded({result: +1});});
        start2.addEventListener("click", () => {
            image.src = "BigReview.jpg";
            image.src = "GoingHome.png";
            ReviewActionServer.setSucceeded({result: +2});});
        start3.addEventListener("click", () => {
            image.src = "BigReview.jpg";
            image.src = "GoingHome.png";
            ReviewActionServer.setSucceeded({result: +3});});
        start4.addEventListener("click", () => {
            image.src = "GoingHome.png";
            ReviewActionServer.setSucceeded({result: +4});});
        start5.addEventListener("click", () => {
            image.src = "GoingHome.png";
            ReviewActionServer.setSucceeded({result: +5});});
    });
}

window.onload = () => {
    lid_button = document.getElementById("lid_button");
    lid_button.disabled = false;
    lid_button.style.display = 'block';
    pin_button = document.getElementById("pin_btn");
    pin_button.disabled = true;
    pin_button.style.display = 'none';
    image = document.getElementById("bg");
    btn_group = document.getElementById("review_group");
    btn_group.style.display = 'none';
};

// else if (feedback.status == 'CloseLid') {
//     image.src = "CloseLid.png";
//     lid_button.disabled = false;
//     lid_button.style.display = 'block';
//     start_button.disabled = true;
//     start_button.style.display = 'none';
// }