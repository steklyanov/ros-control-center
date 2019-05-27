let poses = [];
let goals = [];
let button = document.getElementById("put_marker");
let saverPose = document.getElementById("save_poses");
// saverPose.addEventListener("click", pose_saver());
saverPose.addEventListener("click", () => {
    poses['path'] = '/home/ubuntu/max_test_trash/first';
    console.log(JSON.stringify(poses));
    // let SavePoses = new ROSLIB.Service({
    //     ros : ros,
    //     name : '/courier_file_server',
    //     serviceType : 'courier_file_server/SavePoses'
    // });
    //
    // var request = new ROSLIB.ServiceRequest(poses);
});

function pose_saver() {
    console.log(JSON.stringify(poses));
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
