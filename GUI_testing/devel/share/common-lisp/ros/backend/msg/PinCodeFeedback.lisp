; Auto-generated. Do not edit!


(cl:in-package backend-msg)


;//! \htmlinclude PinCodeFeedback.msg.html

(cl:defclass <PinCodeFeedback> (roslisp-msg-protocol:ros-message)
  ()
)

(cl:defclass PinCodeFeedback (<PinCodeFeedback>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <PinCodeFeedback>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'PinCodeFeedback)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-msg:<PinCodeFeedback> is deprecated: use backend-msg:PinCodeFeedback instead.")))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <PinCodeFeedback>) ostream)
  "Serializes a message object of type '<PinCodeFeedback>"
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <PinCodeFeedback>) istream)
  "Deserializes a message object of type '<PinCodeFeedback>"
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<PinCodeFeedback>)))
  "Returns string type for a message object of type '<PinCodeFeedback>"
  "backend/PinCodeFeedback")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'PinCodeFeedback)))
  "Returns string type for a message object of type 'PinCodeFeedback"
  "backend/PinCodeFeedback")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<PinCodeFeedback>)))
  "Returns md5sum for a message object of type '<PinCodeFeedback>"
  "d41d8cd98f00b204e9800998ecf8427e")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'PinCodeFeedback)))
  "Returns md5sum for a message object of type 'PinCodeFeedback"
  "d41d8cd98f00b204e9800998ecf8427e")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<PinCodeFeedback>)))
  "Returns full string definition for message of type '<PinCodeFeedback>"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Feedback~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'PinCodeFeedback)))
  "Returns full string definition for message of type 'PinCodeFeedback"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Feedback~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <PinCodeFeedback>))
  (cl:+ 0
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <PinCodeFeedback>))
  "Converts a ROS message object to a list"
  (cl:list 'PinCodeFeedback
))
