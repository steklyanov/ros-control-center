let poses = [];
let goals = [];
let message = {};
let button = document.getElementById("put_marker");
let saverPose = document.getElementById("save_poses");
saverPose.addEventListener("click", () => {
    event.preventDefault();
    message['path'] = '/home/ubuntu/max_test_trash/first';
    message['poses'] = poses;

    let SavePoses = new ROSLIB.Service({
        ros : ros,
        name : '/save_poses',
        serviceType : 'save_load_server/SavePoses'
    });
    // let request = new ROSLIB.ServiceRequest(message);
    var v1 = new ROSLIB.Vector3({
        x : 1,
        y : 2,
        z : 3
    });

    var q1 = new ROSLIB.Quaternion({
        x : 0.1,
        y : 0.2,
        z : 0.3,
        w : 0.4
    });
    var p = new ROSLIB.Pose({
        position : v1,
        orientation : q1
    });
    console.log(p);
    let request = new ROSLIB.ServiceRequest({
        path: '/home/ubuntu/max_test_trash/first',
        poses: [
            p,
            p,
            p
        ]
    });
    console.log(request);
    SavePoses.callService(request, function (result) {
        console.log(SavePoses);
        console.log(result);
    });
    console.log(SavePoses);
});

function pose_saver() {
    let message_poses = [];
    poses.forEach((elem, index) => {
        console.log(elem);
        console.log(index);
    });

    // console.log(poses);
    // let SavePoses = new ROSLIB.Service({
    //     ros : ros,
    //     name : '/courier_file_server',
    //     serviceType : 'courier_file_server/SavePoses'
    // });
    //
    // var request = new ROSLIB.ServiceRequest(poses);


    // var request = new ROSLIB.ServiceRequest({
//     poses : [
//         position : {
//     x : ,
//     y : ,
//     z : ,
// },
// orientation : {
//     x : ,
//     y : ,
//     z :
//         }
//     ]
//
// });

    // SavePoses.callService(request, function(result) {
    //     console.log('Result for service call on '
    //         + addTwoIntsClient.name
    //         + ': '
    //         + result.sum);
    // });
}