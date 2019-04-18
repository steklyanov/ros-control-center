// Here i declare all necessary global objects and class instances
let node_array = {}; // basic array to collect all nodes with info
// about topics publishers, subscribers, services + messages types
let twist;
let ros;
let cmdVel;
var teleop; // necessary object for checking teleop
// first init  in InitTeleopKeyboard()
var manager; // necessary object for checking teleop
// first init in createJoystick()
var publishImmidiately = true; // see more in createJoystick() func


function init(ip_addres) {
    let str1 = 'ws://';
    res = str1.concat(ip_addres);
    ros = new ROSLIB.Ros({
        url : res
    });
    init_var();
    create_navigation();
    initVelocityPublisher();
    createJoystick();
    initTeleopKeyboard();
    // This function is called upon the rosbridge connection event
    ros.on('connection', function () {
        // Write appropriate message to #feedback div when successfully connected to rosbridge
        // var fbDiv = document.getElementById('feedback');
        // fbDiv.innerHTML += "<p>Connected to websocket server.</p>";
        togleButton();
    });

// This function is called when there is an error attempting to connect to rosbridge
    ros.on('error', function (error) {
        // Write appropriate message to #feedback div upon error when attempting to connect to rosbridge
        // var fbDiv = document.getElementById('feedback');
        // fbDiv.innerHTML += "<p>Error connecting to websocket server.</p>";
        togleButton();
    });

// This function is called when the connection to rosbridge is closed
    ros.on('close', function () {
        // Write appropriate message to #feedback div upon closing connection to rosbridge
        // var fbDiv = document.getElementById('feedback');
        // fbDiv.innerHTML += "<p>Connection to websocket server closed.</p>";
        togleButton();
    });
}

// FUnction to disable buttons in case of losing connection from rosbridge
function togleButton() {
    const btn = document.querySelector('#sendMsg');
    if (btn.classList.contains('disabled')) {
        btn.classList.remove('disabled')
    } else {
        btn.classList.add('disabled')
    }
}


function init_var()
{
    // Init standard message to operate robot with zero values.
    twist = new ROSLIB.Message({
        linear: {
            x: 0,
            y: 0,
            z: 0
        },
        angular: {
            x: 0,
            y: 0,
            z: 0
        }
    });
    // Init topic object
    cmdVel = new ROSLIB.Topic({
        ros: ros,
        name: '/cmd_vel',
        messageType: 'geometry_msgs/Twist'
    });
}