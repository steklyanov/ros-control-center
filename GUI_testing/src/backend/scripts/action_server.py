#! /usr/bin/env python
import rospy
import actionlib
from actionlib_msgs.msg import GoalStatusArray

from backend.msg import *

# from backend.msg import OrderAction, OrderFeedback, OrderResult
# from backend.msg import PinCodeAction, PinCodeFeedback, PinCodeResult
# from backend.msg import ReviewAction
# from backend.srv import GetStatus
# from backend.srv import OrderStatus, Screen
from backend.srv import *
from std_msgs.msg import String
from backend.msg import *


class ActionServer():
    def __init__(self):
        # init action server name,
        self.a_server = actionlib.SimpleActionServer(
            "courier_robot_order", OrderAction, execute_cb=self.execute_cb, auto_start=False)
        self.a_service = rospy.Service('courier_robot_get_robot_status', GetStatus, self.robot_status_service)
        self.get_order = rospy.Service('courier_robot_get_order_status', OrderStatus, self.order_status_service)
        self.status_info = rospy.Publisher('courier_robot_status_info', StatusInfo, queue_size=10)
        self.change_screen = rospy.Publisher('courier_robot_display_screen', String, queue_size=10)
        self.get_pin = actionlib.SimpleActionServer(
            "courier_robot_display_get_pin_code", PinCodeAction, execute_cb=self.pincode_execute_cb, auto_start=False)
        self.get_review = actionlib.SimpleActionServer(
            "courier_robot_display_get_review", ReviewAction, execute_cb=self.get_review, auto_start=False)
        self.current_order = {"id": 0}
        self.task = "Start condition"
        self.a_server.start()
        self.get_pin.start()
        self.get_review.start()
        self.display_screen()
        self.get_status_info()
        self.feedback = OrderFeedback()
        self.result = OrderResult()
        self.status = True
        self.current_pincode = ""

    def display_screen(self):
        self.change_screen.publish("Change screen")
        return

    def get_status_info(self):
        self.status_info.publish(self.current_order["id"], self.task)
        return

    #  listen action status and init action
    def listener_callback(self, req):
        if (req.status_list):
            self.status = True
        else:
            self.status = False

    # check action status
    def robot_status_service(self, req):
        print(req)
        rospy.Subscriber("/courier_robot_order/status", GoalStatusArray, self.listener_callback)
        if self.status:
            self.execute_cb(req)
            return GetStatusResponse(True, "did it")
            print("Im here")
        else:
            return GetStatusResponse(False, "busy")

    def order_status_service(self, req):
        print(req)
        if (req.order_id == self.current_order.order_id):
            return OrderStatusResponse("Order is delivered")
        else:
            return OrderStatusResponse("Order is waiting")

    # Emulate robot movement, send feedback and result
    def execute_cb(self, goal):
        print("Im here")
        self.status = False
        print(goal)
        self.current_order = goal
        self.current_pincode = ""
        # self.success = True
        rate = rospy.Rate(1)
        for i in range(0, 10):
            print("Here i am")
            if self.a_server.is_preempt_requested():
                break
            # self.feedback.status = "Getting order" + str(i)
            # self.a_server.publish_feedback(self.feedback)
            if (i < 3):
                # self.display_screen()
                self.feedback.status = "Getting order" + str(i)
                self.a_server.publish_feedback(self.feedback)
            if (i < 6 and i > 3):
                self.display_screen()
                self.feedback.status = "Delivering" + str(i)
                self.a_server.publish_feedback(self.feedback)
            if (i < 8 and i > 6):
                self.feedback.status = "Getting order" + str(i)
                self.a_server.publish_feedback(self.feedback)
                self.display_screen()
            rate.sleep()
        while (self.current_pincode == ""):
            self.feedback.status = "Waiting for PIN"
            self.a_server.publish_feedback(self.feedback)
            print("Waiting for pincode")
            rate.sleep()
        # self.pincode_execute_cb("1200")
        print(self.current_pincode)
        if self.current_pincode:
            self.result.result = True
            self.status = True
            self.a_server.set_succeeded(self.result)
        else:
            print("error")

    def pincode_execute_cb(self, goal):
        self.current_pincode = goal
        print("I get PIN: ", goal)
        result = PinCodeResult()
        result.pin_message = "I get PIN"
        self.get_pin.set_succeeded(result)

    def get_review(self, goal):
        print("You gain ", goal)
        self.get_review.set_succeeded(goal)

if __name__=='__main__':
    # init  ROS node
    rospy.init_node('courier_robot')
    s = ActionServer()
    # make it always run
    rospy.spin()
