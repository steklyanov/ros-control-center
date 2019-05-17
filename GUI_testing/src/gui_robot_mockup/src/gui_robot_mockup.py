#! /usr/bin/env python

import rospy

import backend.msg

import actionlib

from std_msgs.msg import String

class gui_robot_mockup(object):
    #class members:
    def callback(self, data):
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", data.data)

  #methods:
    def __init__(self):
        self.get_review = actionlib.SimpleActionServer(
            "courier_robot_display_get_review", backend.msg.ReviewAction, execute_cb=self._get_review, auto_start=False)
        self.get_pin = actionlib.SimpleActionServer(
            "courier_robot_display_get_pin_code", backend.msg.PinCodeAction, execute_cb=self._get_pin, auto_start=False)
        self.get_review.start()
        print "get_review has started"
        self.get_pin.start()
        print "get_pin has started"

        rospy.Subscriber("courier_robot_display_screen", String, self.callback)
    def _get_review(self, goal):
        print "giving a review"
        if self.get_review.is_preempt_requested():
            rospy.loginfo('get_review is preempted')
            self.get_review.set_preempted()
            return
        rospy.sleep(5.0)
        _result = backend.msg.ReviewResult()
        _result.result = 5
        self.get_review.set_succeeded(_result)
        print "review ok"
        pass

    def _get_pin(self, goal):
        print "giving the pin"
        if self.get_pin.is_preempt_requested():
            rospy.loginfo('get_pin is preempted')
            self.get_pin.set_preempted()
            return
        rospy.sleep(2.0)
        print "1"
        _result = backend.msg.PinCodeResult()
        print "2"
        _result.pin_code = "0000"
        print "3"
        self.get_pin.set_succeeded(_result)
        print "4"
        pass

if __name__ == '__main__':
    rospy.init_node('gui_robot_mockup')
    server = gui_robot_mockup()
    rospy.spin()

