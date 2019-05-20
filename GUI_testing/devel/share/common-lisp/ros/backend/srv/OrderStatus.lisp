; Auto-generated. Do not edit!


(cl:in-package backend-srv)


;//! \htmlinclude OrderStatus-request.msg.html

(cl:defclass <OrderStatus-request> (roslisp-msg-protocol:ros-message)
  ((order_id
    :reader order_id
    :initarg :order_id
    :type cl:fixnum
    :initform 0))
)

(cl:defclass OrderStatus-request (<OrderStatus-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <OrderStatus-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'OrderStatus-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-srv:<OrderStatus-request> is deprecated: use backend-srv:OrderStatus-request instead.")))

(cl:ensure-generic-function 'order_id-val :lambda-list '(m))
(cl:defmethod order_id-val ((m <OrderStatus-request>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:order_id-val is deprecated.  Use backend-srv:order_id instead.")
  (order_id m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <OrderStatus-request>) ostream)
  "Serializes a message object of type '<OrderStatus-request>"
  (cl:let* ((signed (cl:slot-value msg 'order_id)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <OrderStatus-request>) istream)
  "Deserializes a message object of type '<OrderStatus-request>"
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'order_id) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<OrderStatus-request>)))
  "Returns string type for a service object of type '<OrderStatus-request>"
  "backend/OrderStatusRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'OrderStatus-request)))
  "Returns string type for a service object of type 'OrderStatus-request"
  "backend/OrderStatusRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<OrderStatus-request>)))
  "Returns md5sum for a message object of type '<OrderStatus-request>"
  "954d97139ffd0d17e83f4320bddc89c8")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'OrderStatus-request)))
  "Returns md5sum for a message object of type 'OrderStatus-request"
  "954d97139ffd0d17e83f4320bddc89c8")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<OrderStatus-request>)))
  "Returns full string definition for message of type '<OrderStatus-request>"
  (cl:format cl:nil "int16 order_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'OrderStatus-request)))
  "Returns full string definition for message of type 'OrderStatus-request"
  (cl:format cl:nil "int16 order_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <OrderStatus-request>))
  (cl:+ 0
     2
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <OrderStatus-request>))
  "Converts a ROS message object to a list"
  (cl:list 'OrderStatus-request
    (cl:cons ':order_id (order_id msg))
))
;//! \htmlinclude OrderStatus-response.msg.html

(cl:defclass <OrderStatus-response> (roslisp-msg-protocol:ros-message)
  ((status
    :reader status
    :initarg :status
    :type cl:string
    :initform ""))
)

(cl:defclass OrderStatus-response (<OrderStatus-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <OrderStatus-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'OrderStatus-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-srv:<OrderStatus-response> is deprecated: use backend-srv:OrderStatus-response instead.")))

(cl:ensure-generic-function 'status-val :lambda-list '(m))
(cl:defmethod status-val ((m <OrderStatus-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:status-val is deprecated.  Use backend-srv:status instead.")
  (status m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <OrderStatus-response>) ostream)
  "Serializes a message object of type '<OrderStatus-response>"
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'status))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'status))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <OrderStatus-response>) istream)
  "Deserializes a message object of type '<OrderStatus-response>"
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
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<OrderStatus-response>)))
  "Returns string type for a service object of type '<OrderStatus-response>"
  "backend/OrderStatusResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'OrderStatus-response)))
  "Returns string type for a service object of type 'OrderStatus-response"
  "backend/OrderStatusResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<OrderStatus-response>)))
  "Returns md5sum for a message object of type '<OrderStatus-response>"
  "954d97139ffd0d17e83f4320bddc89c8")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'OrderStatus-response)))
  "Returns md5sum for a message object of type 'OrderStatus-response"
  "954d97139ffd0d17e83f4320bddc89c8")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<OrderStatus-response>)))
  "Returns full string definition for message of type '<OrderStatus-response>"
  (cl:format cl:nil "string status~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'OrderStatus-response)))
  "Returns full string definition for message of type 'OrderStatus-response"
  (cl:format cl:nil "string status~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <OrderStatus-response>))
  (cl:+ 0
     4 (cl:length (cl:slot-value msg 'status))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <OrderStatus-response>))
  "Converts a ROS message object to a list"
  (cl:list 'OrderStatus-response
    (cl:cons ':status (status msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'OrderStatus)))
  'OrderStatus-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'OrderStatus)))
  'OrderStatus-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'OrderStatus)))
  "Returns string type for a service object of type '<OrderStatus>"
  "backend/OrderStatus")