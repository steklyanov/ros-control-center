; Auto-generated. Do not edit!


(cl:in-package backend-msg)


;//! \htmlinclude OrderGoal.msg.html

(cl:defclass <OrderGoal> (roslisp-msg-protocol:ros-message)
  ((order_id
    :reader order_id
    :initarg :order_id
    :type cl:fixnum
    :initform 0)
   (pin_code
    :reader pin_code
    :initarg :pin_code
    :type cl:string
    :initform ""))
)

(cl:defclass OrderGoal (<OrderGoal>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <OrderGoal>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'OrderGoal)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-msg:<OrderGoal> is deprecated: use backend-msg:OrderGoal instead.")))

(cl:ensure-generic-function 'order_id-val :lambda-list '(m))
(cl:defmethod order_id-val ((m <OrderGoal>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-msg:order_id-val is deprecated.  Use backend-msg:order_id instead.")
  (order_id m))

(cl:ensure-generic-function 'pin_code-val :lambda-list '(m))
(cl:defmethod pin_code-val ((m <OrderGoal>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-msg:pin_code-val is deprecated.  Use backend-msg:pin_code instead.")
  (pin_code m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <OrderGoal>) ostream)
  "Serializes a message object of type '<OrderGoal>"
  (cl:let* ((signed (cl:slot-value msg 'order_id)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'pin_code))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'pin_code))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <OrderGoal>) istream)
  "Deserializes a message object of type '<OrderGoal>"
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'order_id) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((__ros_str_len 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'pin_code) (cl:make-string __ros_str_len))
      (cl:dotimes (__ros_str_idx __ros_str_len msg)
        (cl:setf (cl:char (cl:slot-value msg 'pin_code) __ros_str_idx) (cl:code-char (cl:read-byte istream)))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<OrderGoal>)))
  "Returns string type for a message object of type '<OrderGoal>"
  "backend/OrderGoal")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'OrderGoal)))
  "Returns string type for a message object of type 'OrderGoal"
  "backend/OrderGoal")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<OrderGoal>)))
  "Returns md5sum for a message object of type '<OrderGoal>"
  "5a933b66a339c8e24cb0bb060b44273a")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'OrderGoal)))
  "Returns md5sum for a message object of type 'OrderGoal"
  "5a933b66a339c8e24cb0bb060b44273a")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<OrderGoal>)))
  "Returns full string definition for message of type '<OrderGoal>"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Goal~%int16 order_id~%string pin_code~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'OrderGoal)))
  "Returns full string definition for message of type 'OrderGoal"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Goal~%int16 order_id~%string pin_code~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <OrderGoal>))
  (cl:+ 0
     2
     4 (cl:length (cl:slot-value msg 'pin_code))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <OrderGoal>))
  "Converts a ROS message object to a list"
  (cl:list 'OrderGoal
    (cl:cons ':order_id (order_id msg))
    (cl:cons ':pin_code (pin_code msg))
))