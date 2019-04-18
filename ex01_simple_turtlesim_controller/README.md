#### Basic ROS functionality with roslibjs

**_to start a project:_**

    roscore
    rostopic pub /listener std_msgs/String "Hello, World"
    rostopic echo /cmd_vel
    rosrun rospy_tutorials add_two_ints_server
    roslaunch rosbridge_server rosbridge_websocket.launch

