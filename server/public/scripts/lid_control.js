
function lid_button() {
    lid_action = !lid_action;
    lid_control(lid_action);
    const btn = document.querySelector('#lid_control');
    if (btn.classList.contains('btn-primary')) {
        btn.classList.add('btn-success');
        btn.classList.remove('btn-primary');
        btn.innerHTML = "Close lid";
    } else {
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-success');
        btn.innerHTML = "Open lid";
    }

}


function lid_control(action) {

    var LidControl = new ROSLIB.Service({
        ros : ros,
        name : '/dynamixel_control_srv',
        serviceType : 'action_dynamixel/dynamixel_control'
    });

    var request = new ROSLIB.ServiceRequest({
        // x : 5,
        command : Boolean(action)
    });

    LidControl.callService(request, function(result) {
        console.log('Open lid');
    });

}