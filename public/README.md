#### ROS control center

_This package provide all necessary functionality to control your
robot from web browser_

###### This version allow you:
* run robot using keyboard
* run robot using joystic
* recieve data from lidar
* send navigation goal by double tap to the position on the screen
recieve data from camera
* list all current topics with subscribing, publishing and services options with nessesary messages types

Following services must be installed:
* Nodejs
* npm
* [web_video_server ][1]
* [nav2djs][2]
* [robot_pose_publisher][3]
* [rosbridge_suite][4]

###### How to run:

_On the server side(it can be a robot as well):_

    git clone https://github.com/steklyanov/ros-control-center
    cd ros-control-center
    npm install
    node app.js
_On the robot side:_   

    run your robot moving, navigation nodes
    roslaunch rosbridge_server rosbridge_websocket.launch
    rosrun robot_pose_publisher robot_pose_publisher
    rosrun web_video_server web_video_server
    
[1]: https://github.com/RobotWebTools/web_video_server "web_video_server "
[2]: https://github.com/GT-RAIL/nav2djs "nav2djs"
[3]: https://github.com/GT-RAIL/robot_pose_publisher "robot_pose_publisher"
[4]: https://github.com/RobotWebTools/rosbridge_suite "rosbridge_suite"