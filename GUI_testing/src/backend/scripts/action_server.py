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
        # self.get_pin = actionlib.SimpleActionServer(
        #     "courier_robot_display_get_pin_code", PinCodeAction, execute_cb=self.pincode_execute_cb, auto_start=False)
        self.current_order = {"id": 0}
        self.task = "Start condition"
        self.a_server.start()
        # self.get_pin.start()
        self.display_screen("Init")
        print("Load robot")
        self.status = True
        self.current_pincode = ""

    def display_screen(self, message):
        self.change_screen.publish(str(message))
        return

    #  listen action status and init action
    def listener_callback(self, req):
        print("3")
        if (req.status_list):
            self.status = True
        else:
            self.status = False

    # check action status
    def robot_status_service(self, req):
        print("4")
        print(req)
        rospy.Subscriber("/courier_robot_order/status", GoalStatusArray, self.listener_callback)
        if self.status:
            self.execute_cb(req)
            return GetStatusResponse(True, "did it")
        else:
            return GetStatusResponse(False, "busy")

    def order_status_service(self, req):
        print("5")
        print(req)
        if (req.order_id == self.current_order.order_id):
            return OrderStatusResponse("Order is delivered")
        else:
            return OrderStatusResponse("Order is waiting")

    def get_pin(self):
        print("in get pin function")
        self.client.wait_for_server()
        goal = PinCodeGoal("Enter PIN")
        self.client.send_goal(goal)
        self.client.wait_for_result()
        return self.client.get_result()

    # Emulate robot movement, send feedback and result
    def execute_cb(self, goal):
        feedback = OrderFeedback()
        result = OrderResult()
        self.status = False
        self.current_order = goal
        current_pincode = ""
        rate = rospy.Rate(1)
        for i in range(0, 5):
            if self.a_server.is_preempt_requested():
                break
            if (i == 0):
                filler = actionlib.SimpleActionClient('place_order_act_server', LidAction)
                filler.wait_for_server()
                self.display_screen("CloseLid")
                feedback.status = "CloseLid"
                self.a_server.publish_feedback(feedback)
                goal = LidGoal("Open_lid")
                filler.send_goal(goal)
                print("waiting for result from lid server")
                filler.wait_for_result()
                status = filler.get_result()
            # feedback.status = "Getting order" + str(i)
            # self.a_server.publish_feedback(feedback)
            if (i == 1):
                self.display_screen("OrderDelivery")
                feedback.status = "RideOutNew"
                self.a_server.publish_feedback(feedback)
            if (i == 2):
                # self.display_screen("On the way")
                feedback.status = "PinCodeOpenNew"
                self.a_server.publish_feedback(feedback)
                client = actionlib.SimpleActionClient('courier_robot_display_get_pin_code', PinCodeAction)
                client.wait_for_server()
                pin_goal = PinCodeGoal(str(self.current_order.pin_code))
                client.send_goal(pin_goal)
                print("waiting for pincode")
                client.wait_for_result(rospy.Duration(150.0))
                validation = client.get_result()
                print(type(validation))
                if validation.result == "true":
                    self.display_screen("TakeOrder")
                    self.get_review()
                    print(validation)
                else:
                    print("nope")

            if (i == 3):
                feedback.status = "GoingHome"
                self.a_server.publish_feedback(feedback)
                self.display_screen("GoingHome")
            rate.sleep()
        #     FINAL
        self.display_screen("StandBy")
        result.result = True
        self.a_server.set_succeeded(result)

    def pincode_execute_cb(self, goal):
        print("Pin server req: ", goal, "Line 145")
        result = PinCodeResult()
        result.pin_code = "1234"
        self.get_pin.set_succeeded(result)

    def get_review(self):
        print("Get review start")
        client = actionlib.SimpleActionClient('courier_robot_display_get_review', ReviewAction)
        client.wait_for_server()
        goal = ReviewActionGoal()
        goal.goal = "Enter_review"
        client.send_goal(goal)
        timeout = rospy.Duration(30.0)
        client.wait_for_result(timeout)
        review = client.get_result()
        if review.result <= 3:
            self.display_screen("ExtraReview")

if __name__=='__main__':
    rospy.init_node('courier_robot')
    s = ActionServer()
    rospy.spin()
