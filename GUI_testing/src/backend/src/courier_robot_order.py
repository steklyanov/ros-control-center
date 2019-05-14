#! /usr/bin/env python

import rospy

def courier_robot_order():


if __name__ ==  '__main__':
    try:
        # Init rospy node
        rospy.init_node('courier_robot_order')
        result = courier_robot_order()
        print(result)
    except rospy.ROSInterruptExeption:
        print("Program finished with error")