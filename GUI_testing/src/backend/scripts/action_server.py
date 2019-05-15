#! /usr/bin/env python
import rospy
import actionlib
from actionlib_msgs.msg import GoalStatusArray

from backend.msg import *

# from backend.msg import OrderAction, OrderFeedback, OrderResult
# from backend.msg import PinCodeAction, PinCodeFeedback, PinCodeResult
# from backend.msg import ReviewAction
from backend.srv import GetStatus
from backend.srv import OrderStatus, Screen


class ActionServer():
    def __init__(self):
        # init action server name,
        self.a_server = actionlib.SimpleActionServer(
            "courier_robot_order", OrderAction, execute_cb=self.execute_cb, auto_start=False)
        self.a_service = rospy.Service('courier_robot_get_robot_status', GetStatus, self.robot_status_service)
        self.get_order = rospy.Service('courier_robot_get_order_status', OrderStatus, self.robot_status_service)
        self.change_screen = rospy.Service('courier_robot_display_screen', Screen, self.display_screen)
        self.get_pin = actionlib.SimpleActionServer(
            "name courier_robot_display_get_pin_code", PinCodeAction, execute_cb=self.pincode_execute_cb, auto_start=False)
        self.get_review = actionlib.SimpleActionServer(
            "name courier_robot_display_get_review", ReviewAction, execute_cb=self.get_review, auto_start=False)
        self.a_server.start()
        self.current_order = []
        self.status = True

    def display_screen(self):
        return StringResponce("Change screen")

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
        else:
            print(answer)
        return GetStatusResponse(self.status,"")

    # def order_status_service(self, req):
    #     print(req)
    #     if (req.order_id == self.current_order.order_id):
    #         OrderStatusResponse("Order is delivered")
    #     else:
    #         OrderStatusResponse("Order is waiting")

    # Emulate robot movement, send feedback and result
    def execute_cb(self, goal):
        self.current_order = goal
        success = True
        feedback = OrderFeedback()
        result = OrderResult()
        rate = rospy.Rate(1)
        for i in range(0, 10):
            if self.a_server.is_preempt_requested():
                success = False
                break
            feedback.status = "On my way" + str(i)
            self.a_server.publish_feedback(feedback)
            rate.sleep()

        if success:
            result.result = True
            status = True
            self.a_server.set_succeeded(result)

    def pincode_execute_cb(self, goal):
        print("I get PIN: ", goal)
        self.get_pin.set_succeeded("I get PIN")

    def get_review(self, goal):
        print("You gain ", goal)

if __name__=='__main__':
    # init  ROS node
    rospy.init_node('courier_robot')
    s = ActionServer()
    # make it always run
    rospy.spin()
