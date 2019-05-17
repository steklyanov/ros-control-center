#! /usr/bin/env python

import rospy

import backend.msg

import actionlib

def _order_active():
    print "order has transitioned to active state"

def _order_feedback(feedback):
    print "feedback:", feedback
    # if (feedback.status == "chan")

def _order_done(state, result):
    print "order is done, result: ", result


def order_client():
    client = actionlib.SimpleActionClient('courier_robot_order', backend.msg.OrderAction)
    print "waiting for server"
    client.wait_for_server()
    goal = backend.msg.OrderGoal(order_id = 1, pin_code = "0000")
    client.send_goal(goal, 
                    active_cb=_order_active,
                    feedback_cb=_order_feedback,
                    done_cb=_order_done)
    return True
    pass

if __name__ == '__main__':
    try:
        # Initializes a rospy node so that the SimpleActionClient can
        # publish and subscribe over ROS.
        rospy.init_node('gui_pad_mockup')
        result = order_client()
        # print "Result: ", result
        rate = rospy.Rate(10) # 10hz
        while not rospy.is_shutdown():
            rate.sleep()

    except rospy.ROSInterruptException:
        # print("program interrupted before completion", file=sys.stderr)
        pass