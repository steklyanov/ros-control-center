; Auto-generated. Do not edit!


(cl:in-package backend-msg)


;//! \htmlinclude OrderFeedback.msg.html

(cl:defclass <OrderFeedback> (roslisp-msg-protocol:ros-message)
  ((status
    :reader status
    :initarg :status
    :type cl:string
    :initform ""))
)

(cl:defclass OrderFeedback (<OrderFeedback>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <OrderFeedback>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'OrderFeedback)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-msg:<OrderFeedback> is deprecated: use backend-msg:OrderFeedback instead.")))

(cl:ensure-generic-function 'status-val :lambda-list '(m))
(cl:defmethod status-val ((m <OrderFeedback>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-msg:status-val is deprecated.  Use backend-msg:status instead.")
  (status m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <OrderFeedback>) ostream)
  "Serializes a message object of type '<OrderFeedback>"
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'status))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'status))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <OrderFeedback>) istream)
  "Deserializes a message object of type '<OrderFeedback>"
    (cl:let ((__ros_str_len 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'status) (cl:make-string __ros_str_len))
      (cl:dotimes (__ros_str_idx __ros_str_len msg)
        (cl:setf (cl:char (cl:slot-value msg 'status) __ros_str_idx) (cl:code-char (cl:read-byte istream)))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<OrderFeedback>)))
  "Returns string type for a message object of type '<OrderFeedback>"
  "backend/OrderFeedback")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'OrderFeedback)))
  "Returns string type for a message object of type 'OrderFeedback"
  "backend/OrderFeedback")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<OrderFeedback>)))
  "Returns md5sum for a message object of type '<OrderFeedback>"
  "4fe5af303955c287688e7347e9b00278")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'OrderFeedback)))
  "Returns md5sum for a message object of type 'OrderFeedback"
  "4fe5af303955c287688e7347e9b00278")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<OrderFeedback>)))
  "Returns full string definition for message of type '<OrderFeedback>"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Feedback~%string status~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'OrderFeedback)))
  "Returns full string definition for message of type 'OrderFeedback"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Feedback~%string status~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <OrderFeedback>))
  (cl:+ 0
     4 (cl:length (cl:slot-value msg 'status))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <OrderFeedback>))
  "Converts a ROS message object to a list"
  (cl:list 'OrderFeedback
    (cl:cons ':status (status msg))
))