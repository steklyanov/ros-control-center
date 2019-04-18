// This function connects to the rosbridge server running on the local computer on port 9090

var rbServer = new ROSLIB.Ros({
    url: 'ws://10.0.1.7:9090'

});


function togleButton() {
    const btn = document.querySelector('#sendMsg');
    if (btn.classList.contains('disabled')) {
        btn.classList.remove('disabled')
    } else {
        btn.classList.add('disabled')
    }
    const btn2 = document.querySelector('#teleport_turtle_btn');
    if (btn2.classList.contains('disabled')) {
        btn2.classList.remove('disabled')
    } else {
        btn2.classList.add('disabled')
    }
}

// This function is called upon the rosbridge connection event
rbServer.on('connection', function () {
    // Write appropriate message to #feedback div when successfully connected to rosbridge
    var fbDiv = document.getElementById('feedback');
    fbDiv.innerHTML += "<p>Connected to websocket server.</p>";
    togleButton();
});

// This function is called when there is an error attempting to connect to rosbridge
rbServer.on('error', function (error) {
    // Write appropriate message to #feedback div upon error when attempting to connect to rosbridge
    var fbDiv = document.getElementById('feedback');
    fbDiv.innerHTML += "<p>Error connecting to websocket server.</p>";
    togleButton();
});

// This function is called when the connection to rosbridge is closed
rbServer.on('close', function () {
    // Write appropriate message to #feedback div upon closing connection to rosbridge
    var fbDiv = document.getElementById('feedback');

    fbDiv.innerHTML += "<p>Connection to websocket server closed.</p>";
    togleButton();
});

// These lines create a topic object as defined by roslibjs
var cmdVelTopic = new ROSLIB.Topic({
    ros: rbServer,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist'
});

// These lines create a message that conforms to the structure of the Twist defined in our ROS installation
// It initalizes all properties to zero. They will be set to appropriate values before we publish this message.
var twist = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

/* This function:
 - retrieves numeric values from the text boxes
 - assigns these values to the appropriate values in the twist message
 - publishes the message to the cmd_vel topic.
 */
function pubMessage() {
    /**
     Set the appropriate values on the twist message object according to values in text boxes
     It seems that turtlesim only uses the x property of the linear object
     and the z property of the angular object
     **/
    var linearX = 0.0;
    var angularZ = 0.0;

    // get values from text input fields. Note for simplicity we are not validating.
    linearX = Number(document.getElementById('linearXText').value);
    angularZ = Number(document.getElementById('angularZText').value);

    // Set the appropriate values on the message object
    twist.linear.x = linearX;
    twist.angular.z = angularZ;

    // Publish the message
    cmdVelTopic.publish(twist);
}



function teleport_turtle() {

    var TeleportTurtle = new ROSLIB.Service({
    ros : ros,
    name : '/turtle1/teleport_absolute',
    serviceType : 'turtlesim/TeleportAbsolute'
  });

  var request = new ROSLIB.ServiceRequest({
      // x : 5,
      // y : 5,
    x : Number(document.getElementById('x_position').value),
    y : Number(document.getElementById('y_position').value),
    theta : 0
  });

  TeleportTurtle.callService(request, function(result) {
    console.log('Succes teleport');
  });

}




