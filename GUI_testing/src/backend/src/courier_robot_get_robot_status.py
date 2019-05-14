#!/usr/bin/env python

import rospy

def courier_robot_get_robot_status():
    rospy.init_node('courier_robot_get_robot_status')
    s = rospy.Service('courier_robot_get_robot_status', GetStatus, request_function)

if __name__ == "__main__":
    courier_robot_get_robot_status()