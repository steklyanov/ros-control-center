let poses = [];
let goals = [];
let message = {};
let button = document.getElementById("put_marker");
let saverPose = document.getElementById("save_poses");
// saverPose.addEventListener("click", pose_saver());
saverPose.addEventListener("click", () => {
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
        ],
    });
    console.log(request);
    SavePoses.callService(request, function (result) {
        console.log(SavePoses);
        console.log(result);
    });
    console.log(SavePoses);
});

function pose_saver() {
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
}


// SavePoses
// string path
// geometry_msgs/PoseArray poses
//  std_msgs/Header header
//      uint32 seq
//      time stamp
//      string frame_id
//  geometry_msgs/Pose[] poses
//    geometry_msgs/Point position
//      float64 x
//      float64 y
//      float64 z
//  geometry_msgs/Quaternion orientation
//      float64 x
//      float64 y
//      float64 z
//      float64 w
// ---
// string status
