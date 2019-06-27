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
  // var that = this;
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

  console.log("Inside OccupancyGrid");
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
    console.log("here as well");
    this.navigator.ros = this.ros;
    this.navigator.serverName = this.serverName;
    this.navigator.actionName = this.actionName;
    this.navigator.rootObject = this.rootObject;
    this.navigator.withOrientation = this.withOrientation;
    // scale the viewer to fit the map
    this.viewer.scaleToDimensions(client.currentGrid.width, client.currentGrid.height);
    this.viewer.shift(client.currentGrid.pose.position.x, client.currentGrid.pose.position.y);
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
    this.saverPose = options.saverPose;
    this.moveBtn = options.moveBtn;
    this.loaderPose = options.loaderPose;
    this.clearPose = options.clearPose;
    this.path = options.path;
    this.poses = options.poses;
    this.mode = options.mode;
    this.new_polygon = [];




  // setup the actionlib client
  var actionClient = new ROSLIB.ActionClient({
    ros : ros,
    actionName : actionName,
    serverName : this.serverName
  });
  // MY CODE
  // this.poses = [];
  this.waypoint_array = [];
  this.colors = [[230, 25, 75], [60, 180, 75], [255, 225, 25], [0, 130, 200], [245, 130, 48],
    [145, 30, 180], [70, 240, 240], [240, 50, 230], [230, 190, 255]];
  this.sendGoal = null;
  // let button = document.getElementById("put_marker");
  // let saverPose = document.getElementById("show_poses");
  this.goals = [];
  this.triangles = [];

  /**
   * Send a goal to the navigation stack with the given pose.
   *
   * @param pose - the goal pose
   */

  this.sendGoal = function (pose) {
    let unique = 1;
    that.poses.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(pose)) {
        unique = 0;
        return;
      }
    });
    if (unique === 1) {that.poses.push(pose)}
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
    this.goals.push(goal);

    //IMPORTANT TO UNMUTE THIS LINE
    // goal.send();
    // create a marker for the goal
    console.log(this.goals);
    console.log(that.colors[this.goals.length]);
    var goalMarker = new ROS2D.NavigationArrow({
      size : 15,
      strokeSize : 1,
      // fillColor : createjs.Graphics.getRGB(255, 64, 128, 0.66),
      fillColor : createjs.Graphics.getRGB(that.colors[this.goals.length][0],that.colors[this.goals.length][1],
        that.colors[this.goals.length][2], 0.66),
      pulse : true
    });
    goalMarker.x = pose.position.x;
    goalMarker.y = -pose.position.y;
    goalMarker.rotation = stage.rosQuaternionToGlobalTheta(pose.orientation);
    goalMarker.scaleX = 1.0 / stage.scaleX;
    goalMarker.scaleY = 1.0 / stage.scaleY;
    that.rootObject.addChild(goalMarker);
    this.triangles.push(goalMarker);

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
    fillColor : createjs.Graphics.getRGB(this.colors[this.goals.length][0],this.colors[this.goals.length][1],
      this.colors[this.goals.length][2], 0.8),
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
      this.sendGoal(pose);
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

    var clickedPolygon = false;
    var selectedPointIndex = null;
    var is_drawing = 0;

    this.putProhibitionPoint = function(event) {
      that.new_polygon = [];
      console.log(event);
      // Callback functions when there is mouse interaction with the polygon
      
      var pointCallBack = function(type, event, index) {
        if (type === 'mousedown') {
          if (event.nativeEvent.shiftKey === true) {
            polygon.remPoint(index);
            that.new_polygon.splice(index, 1);
            console.log(that.new_polygon);
          }
          else {
            selectedPointIndex = index;
          }
        }
        clickedPolygon = true;
      };
      var lineCallBack = function(type, event, index) {
        if (type === 'mousedown') {
          if (event.nativeEvent.ctrlKey === true) {
            polygon.splitLine(index);
          }
        }
        clickedPolygon = true;
      };

      // Create the polygon
      var polygon = new ROS2D.PolygonMarker({
        lineColor : createjs.Graphics.getRGB(100, 100, 255, 1),
        pointCallBack : pointCallBack,
        lineCallBack : lineCallBack
      });

      let move_point = function(event) {
        // Move point when it's dragged
        if (selectedPointIndex !== null) {
          var pos = that.rootObject.globalToRos(event.stageX, event.stageY);
          polygon.movePoint(selectedPointIndex, pos);
          that.new_polygon[selectedPointIndex] = pos;
          console.log(that.new_polygon);
        }
      };

      let add_point = function(event) {
        // Add point when not clicked on the polygon
        if (selectedPointIndex !== null) {
          selectedPointIndex = null;
        }
        else if (that.rootObject.mouseInBounds === true && clickedPolygon === false) {
          var pos = that.rootObject.globalToRos(event.stageX, event.stageY);
          console.log(pos, "pos");
          polygon.addPoint(pos);
          that.new_polygon.push(pos);
          console.log(that.new_polygon);
        }
        clickedPolygon = false;
      };

      // Add the polygon to the viewer
      that.rootObject.addChild(polygon);
      // Event listeners for mouse interaction with the stage
      that.rootObject.mouseMoveOutside = false; // doesn't seem to work
      console.log("here");
      that.rootObject.addEventListener('stagemousemove', move_point);
      // that.rootObject.removeAllEventListeners();
      that.rootObject.addEventListener('stagemouseup', add_point);
    };

    let saverProhibition = document.getElementById("save_prohibition");
    saverProhibition.addEventListener("click", (()=> {
      console.log("worked once");
      that.rootObject.removeAllEventListeners();
      this.rootObject.addEventListener('stagemousedown', function(event) {
        if (mode.checked) {
          if (is_drawing === 0) {
            is_drawing = 1;
            this.putProhibitionPoint(event);
          }
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
    })());

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

        that.sendGoal(pose);
      }
    };

    this.moveBtn.addEventListener("click", () => {
      this.goals.forEach((item) => {item.send()})
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

