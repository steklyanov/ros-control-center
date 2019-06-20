/**
 * @author Russell Toris - rctoris@wpi.edu
 * @author Lars Kunze - l.kunze@cs.bham.ac.uk
 */

var NAV2D = NAV2D || {
  REVISION : '0.3.0'
};

/**
 * @author Russell Toris - rctoris@wpi.edu
 */

/**
 * A OccupancyGridClientNav uses an OccupancyGridClient to create a map for use with a Navigator.
 *
 * @constructor
 * @param options - object with following keys:
 *   * ros - the ROSLIB.Ros connection handle
 *   * topic (optional) - the map meta data topic to listen to
 *   * image - the URL of the image to render
 *   * serverName (optional) - the action server name to use for navigation, like '/move_base'
 *   * actionName (optional) - the navigation action name, like 'move_base_msgs/MoveBaseAction'
 *   * rootObject (optional) - the root object to add the click listeners to and render robot markers to
 *   * withOrientation (optional) - if the Navigator should consider the robot orientation (default: false)
 *   * viewer - the main viewer to render to
 */
NAV2D.ImageMapClientNav = function(options) {
  var that = this;
  options = options || {};
  this.ros = options.ros;
  var topic = options.topic || '/map_metadata';
  var image = options.image;
  this.serverName = options.serverName || '/move_base';
  this.actionName = options.actionName || 'move_base_msgs/MoveBaseAction';
  this.rootObject = options.rootObject || new createjs.Container();
  this.viewer = options.viewer;
  this.withOrientation = options.withOrientation || false;

  this.navigator = null;

  // setup a client to get the map
  var client = new ROS2D.ImageMapClient({
    ros : this.ros,
    rootObject : this.rootObject,
    topic : topic,
    image : image
  });

  client.on('change', function() {
    that.navigator = NAV2D.Navigator({
      ros : that.ros,
      serverName : that.serverName,
      actionName : that.actionName,
      rootObject : that.rootObject,
      withOrientation : that.withOrientation
    });
    // scale the viewer to fit the map
    that.viewer.scaleToDimensions(client.currentImage.width, client.currentImage.height);
    that.viewer.shift(client.currentImage.pose.position.x, client.currentImage.pose.position.y);
  });
};





/**
 * @author Russell Toris - rctoris@wpi.edu
 */
/**
 * A OccupancyGridClientNav uses an OccupancyGridClient to create a map for use with a Navigator.
 *
 * @constructor
 * @param options - object with following keys:
 *   * ros - the ROSLIB.Ros connection handle
 *   * topic (optional) - the map topic to listen to
 *   * rootObject (optional) - the root object to add this marker to
 *   * continuous (optional) - if the map should be continuously loaded (e.g., for SLAM)
 *   * serverName (optional) - the action server name to use for navigation, like '/move_base'
 *   * actionName (optional) - the navigation action name, like 'move_base_msgs/MoveBaseAction'
 *   * rootObject (optional) - the root object to add the click listeners to and render robot markers to
 *   * withOrientation (optional) - if the Navigator should consider the robot orientation (default: false)
 *   * viewer - the main viewer to render to
 */
NAV2D.OccupancyGridClientNav = function(options) {
  var that = this;
  options = options || {};
  this.ros = options.ros;
  var topic = options.topic || '/map';
  var continuous = options.continuous;
  this.serverName = options.serverName || '/move_base';
  this.actionName = options.actionName || 'move_base_msgs/MoveBaseAction';
  this.rootObject = options.rootObject || new createjs.Container();
  this.viewer = options.viewer;
  this.withOrientation = options.withOrientation || false;
  this.navigator = options.navigator;

  // setup a client to get the map
  var client = new ROS2D.OccupancyGridClient({
    ros : this.ros,
    rootObject : this.rootObject,
    continuous : continuous,
    topic : topic
  });
  this.navigator = new NAV2D.Navigator({
    ros : this.ros,
    serverName : this.serverName,
    actionName : this.actionName,
    rootObject : this.rootObject,
    withOrientation : this.withOrientation,
  });

  client.on('change', ()=> {
    // console.log(that.navigator.serverName);
    that.navigator.ros = that.ros;
    that.navigator.serverName = that.serverName;
    that.navigator.actionName = that.actionName;
    that.navigator.rootObject = that.rootObject;
    that.navigator.withOrientation = that.withOrientation;
    // scale the viewer to fit the map
    that.viewer.scaleToDimensions(client.currentGrid.width, client.currentGrid.height);
    that.viewer.shift(client.currentGrid.pose.position.x, client.currentGrid.pose.position.y);
  });
};
/**
 * @author Russell Toris - rctoris@wpi.edu
 * @author Lars Kunze - l.kunze@cs.bham.ac.uk
 */

/**
 * A navigator can be used to add click-to-navigate options to an object. If
 * withOrientation is set to true, the user can also specify the orientation of
 * the robot by clicking at the goal position and pointing into the desired
 * direction (while holding the button pressed).
 *
 * @constructor
 * @param options - object with following keys:
 *   * ros - the ROSLIB.Ros connection handle
 *   * serverName (optional) - the action server name to use for navigation, like '/move_base'
 *   * actionName (optional) - the navigation action name, like 'move_base_msgs/MoveBaseAction'
 *   * rootObject (optional) - the root object to add the click listeners to and render robot markers to
 *   * withOrientation (optional) - if the Navigator should consider the robot orientation (default: false)
 */

NAV2D.Navigator = function(options) {
    var that = this;
    options = options || {};
    var ros = options.ros;
    this.serverName = options.serverName || '/move_base';
    var actionName = options.actionName || 'move_base_msgs/MoveBaseAction';
    var withOrientation = options.withOrientation || false;
    this.rootObject = options.rootObject || new createjs.Container();

    if (this instanceof NAV2D.Navigator) {
      this.saverPose = document.getElementById("show_poses");
      this.moveBtn = document.getElementById("move_btn");
      this.loaderPose = document.getElementById("load_poses");
      this.clearPose = document.getElementById("clear_pose");
      this.path = '/home/ubuntu/max_test_trash/';
      // let mode = document.getElementById("mode");
      this.mode = document.getElementById("mode");
    }



  // setup the actionlib client
  var actionClient = new ROSLIB.ActionClient({
    ros : ros,
    actionName : actionName,
    serverName : this.serverName
  });

  /**
   * Send a goal to the navigation stack with the given pose.
   *
   * @param pose - the goal pose
   */

  // MY CODE
  let poses = [];
  // let button = document.getElementById("put_marker");
  // let saverPose = document.getElementById("show_poses");
  let goals = [];
  let triangles = [];

  function sendGoal(pose) {
    let unique = 1;
    poses.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(pose)) {
        unique = 0;
        return;
      }
    });
    if (unique === 1) {poses.push(pose)}
    var goal = new ROSLIB.Goal({
      actionClient : actionClient,
      goalMessage : {
        target_pose : {
          header : {
            frame_id : '/map'
          },
          pose : pose
        }
      }
    });
    goals.push(goal);
    //IMPORTANT TO UNMUTE THIS LINE
    // goal.send();
    // create a marker for the goal
    var goalMarker = new ROS2D.NavigationArrow({
      size : 15,
      strokeSize : 1,
      fillColor : createjs.Graphics.getRGB(255, 64, 128, 0.66),
      pulse : true
    });
    goalMarker.x = pose.position.x;
    goalMarker.y = -pose.position.y;
    goalMarker.rotation = stage.rosQuaternionToGlobalTheta(pose.orientation);
    goalMarker.scaleX = 1.0 / stage.scaleX;
    goalMarker.scaleY = 1.0 / stage.scaleY;
    that.rootObject.addChild(goalMarker);
    triangles.push(goalMarker);

    goal.on('result', function() {
      that.rootObject.removeChild(goalMarker);
    });
  }

  // get a handle to the stage
  var stage;
  if (that.rootObject instanceof createjs.Stage) {
    stage = that.rootObject;
  } else {
    stage = that.rootObject.getStage();
  }

  // marker for the robot
  var robotMarker = new ROS2D.NavigationArrow({
    size : 25,
    strokeSize : 1,
    fillColor : createjs.Graphics.getRGB(255, 128, 0, 0.66),
    pulse : true
  });
  // wait for a pose to come in first
  robotMarker.visible = false;
  this.rootObject.addChild(robotMarker);
  var initScaleSet = false;

  // setup a listener for the robot pose
  var poseListener = new ROSLIB.Topic({
    ros : ros,
    name : '/robot_pose',
    messageType : 'geometry_msgs/Pose',
    throttle_rate : 100
  });
  poseListener.subscribe(function(pose) {
    // update the robots position on the map
    robotMarker.x = pose.position.x;
    robotMarker.y = -pose.position.y;
    if (!initScaleSet) {
      robotMarker.scaleX = 1.0 / stage.scaleX;
      robotMarker.scaleY = 1.0 / stage.scaleY;
      initScaleSet = true;
    }

    // change the angle
    robotMarker.rotation = stage.rosQuaternionToGlobalTheta(pose.orientation);

    robotMarker.visible = true;
  });

  if (withOrientation === false){
    // setup a double click listener (no orientation)
    this.rootObject.addEventListener('dblclick', function(event) {
      // convert to ROS coordinates
      var coords = stage.globalToRos(event.stageX, event.stageY);
      var pose = new ROSLIB.Pose({
        position : new ROSLIB.Vector3(coords)
      });
      // send the goal
      sendGoal(pose);
    });
  } else {
    // withOrientation === true
    // setup a click-and-point listener (with orientation)
    var position = null;
    var positionVec3 = null;
    var thetaRadians = 0;
    var thetaDegrees = 0;
    var orientationMarker = null;
    var mouseDown = false;
    var xDelta = 0;
    var yDelta = 0;

    var putProhibitionPoint = function(event) {
      var currentPos = stage.globalToRos(event.stageX, event.stageY);
      var currentPosVec3 = new ROSLIB.Vector3(currentPos);

      var clickedPolygon = false;
      var selectedPointIndex = null;
      console.log("polygon");
      // Create the polygon
      var polygon = createjs.Graphics.getRGB(100, 100, 255, 1)


      var pos = that.rootObject.globalToRos(event.stageX, event.stageY);
      // polygon.addPoint(pos);

      // Add the polygon to the viewer
      that.rootObject.addChild(polygon);
      // Event listeners for mouse interaction with the stage

    }

    var mouseEventHandler = function(event, mouseState) {

      if (mouseState === 'down'){
        // get position when mouse button is pressed down
        position = stage.globalToRos(event.stageX, event.stageY);
        positionVec3 = new ROSLIB.Vector3(position);
        mouseDown = true;
      }
      else if (mouseState === 'move'){
        // remove obsolete orientation marker
        that.rootObject.removeChild(orientationMarker);
        
        if ( mouseDown === true) {
          // if mouse button is held down:
          // - get current mouse position
          // - calulate direction between stored <position> and current position
          // - place orientation marker
          var currentPos = stage.globalToRos(event.stageX, event.stageY);
          var currentPosVec3 = new ROSLIB.Vector3(currentPos);

          orientationMarker = new ROS2D.NavigationArrow({
            size : 25,
            strokeSize : 1,
            fillColor : createjs.Graphics.getRGB(0, 255, 0, 0.66),
            pulse : false
          });

          xDelta =  currentPosVec3.x - positionVec3.x;
          yDelta =  currentPosVec3.y - positionVec3.y;
          
          thetaRadians  = Math.atan2(xDelta,yDelta);

          thetaDegrees = thetaRadians * (180.0 / Math.PI);
          
          if (thetaDegrees >= 0 && thetaDegrees <= 180) {
            thetaDegrees += 270;
          } else {
            thetaDegrees -= 90;
          }

          orientationMarker.x =  positionVec3.x;
          orientationMarker.y = -positionVec3.y;
          orientationMarker.rotation = thetaDegrees;
          orientationMarker.scaleX = 1.0 / stage.scaleX;
          orientationMarker.scaleY = 1.0 / stage.scaleY;
          
          that.rootObject.addChild(orientationMarker);
        }
      } else if (mouseDown) { // mouseState === 'up'
        // if mouse button is released
        // - get current mouse position (goalPos)
        // - calulate direction between stored <position> and goal position
        // - set pose with orientation
        // - send goal
        mouseDown = false;

        var goalPos = stage.globalToRos(event.stageX, event.stageY);

        var goalPosVec3 = new ROSLIB.Vector3(goalPos);
        
        xDelta =  goalPosVec3.x - positionVec3.x;
        yDelta =  goalPosVec3.y - positionVec3.y;
        
        thetaRadians  = Math.atan2(xDelta,yDelta);
        
        if (thetaRadians >= 0 && thetaRadians <= Math.PI) {
          thetaRadians += (3 * Math.PI / 2);
        } else {
          thetaRadians -= (Math.PI/2);
        }
        
        var qz =  Math.sin(-thetaRadians/2.0);
        var qw =  Math.cos(-thetaRadians/2.0);
        
        var orientation = new ROSLIB.Quaternion({x:0, y:0, z:qz, w:qw});
        
        var pose = new ROSLIB.Pose({
          position :    positionVec3,
          orientation : orientation
        });
        // send the goal

        sendGoal(pose);
      }
    };

    // costmap_prohibition_layer/ProhibitionAreas prohibition
    // bool fill_polygons
    // geometry_msgs/Polygon[] polygons
    // geometry_msgs/Point32[] points
    // float32 x
    // float32 y
    // float32 z
    // ---
    //   string status

    this.rootObject.addEventListener('stagemousedown', function(event) {
      if (mode.checked) {
        putProhibitionPoint(event);
      }
      else {
        mouseEventHandler(event,'down');
      }
    });

    this.rootObject.addEventListener('stagemousemove', function(event) {
      mouseEventHandler(event,'move');
    });

    this.rootObject.addEventListener('stagemouseup', function(event) {
      mouseEventHandler(event,'up');
    });

    this.saverPose.addEventListener('click', () => {
      if (poses.length) {
        let pose_array = [];
        poses.forEach((elem) => {
          const pose = new ROSLIB.Message({
            position : {
              x : elem['position']['x'],
              y : elem['position']['y'],
              z : elem['position']['z']
            },
            orientation : {
              x : elem['orientation']['x'],
              y : elem['orientation']['y'],
              z : elem['orientation']['z'],
              w : elem['orientation']['w']
            }
          });
          pose_array.push(pose);
        });
        let SavePose = new ROSLIB.Service({
          ros: ros,
          name: '/save_poses',
          serviceType: 'courier_file_server/SavePoses'
        });
        let pose_arr = new ROSLIB.Message({
          poses : pose_array
        });
        let final_path = this.path + document.getElementById("filename").value;
        let request = new ROSLIB.ServiceRequest({
          path :  final_path,
          poses : pose_arr
        });
        // console.log(request);
        console.log(triangles, "triangles");
        SavePose.callService(request, (result) => {
          // console.log(that.rootObject, "before");
          console.log(result);
          triangles.forEach((elem) => {
            // console.log(elem, "elem");
            that.rootObject.removeChild(elem);
          });
          // console.log(that.rootObject);
        })
      }
    });
    this.moveBtn.addEventListener("click", () => {
      goals.forEach((item) => {item.send()})
    });
    this.loaderPose.addEventListener("click", () => {
       let LoadPose = new ROSLIB.Service({
         ros,
         name: '/load_poses',
         serviceType: 'courier_file_server/LoadPoses'
       });
      let final_path = this.path + document.getElementById("filename").value;
      let request = new ROSLIB.ServiceRequest({
        path :  final_path,
      });
      LoadPose.callService(request, (result)=> {
        console.log(result);
        console.log(result['poses']['poses']);
        result['poses']['poses'].forEach((elem) => {
          sendGoal(elem);
        })
      })
    });
    this.clearPose.addEventListener("click", () => {
      let cleanPose = new ROSLIB.Service({
        ros,
        name: '/clear_poses',
        serviceType: 'courier_file_server/ClearPoses'
      });
      let final_path = this.path + document.getElementById("filename").value;
      console.log(final_path);
      let request = new ROSLIB.ServiceRequest({
        path : final_path,
        clear: true
      });
      cleanPose.callService(request, (result)=> {
        console.log(result);
      })
    });
  }
};

