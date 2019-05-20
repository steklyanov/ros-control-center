; Auto-generated. Do not edit!


(cl:in-package backend-srv)


;//! \htmlinclude Screen-request.msg.html

(cl:defclass <Screen-request> (roslisp-msg-protocol:ros-message)
  ()
)

(cl:defclass Screen-request (<Screen-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <Screen-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'Screen-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-srv:<Screen-request> is deprecated: use backend-srv:Screen-request instead.")))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <Screen-request>) ostream)
  "Serializes a message object of type '<Screen-request>"
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <Screen-request>) istream)
  "Deserializes a message object of type '<Screen-request>"
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<Screen-request>)))
  "Returns string type for a service object of type '<Screen-request>"
  "backend/ScreenRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'Screen-request)))
  "Returns string type for a service object of type 'Screen-request"
  "backend/ScreenRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<Screen-request>)))
  "Returns md5sum for a message object of type '<Screen-request>"
  "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'Screen-request)))
  "Returns md5sum for a message object of type 'Screen-request"
  "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<Screen-request>)))
  "Returns full string definition for message of type '<Screen-request>"
  (cl:format cl:nil "~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'Screen-request)))
  "Returns full string definition for message of type 'Screen-request"
  (cl:format cl:nil "~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <Screen-request>))
  (cl:+ 0
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <Screen-request>))
  "Converts a ROS message object to a list"
  (cl:list 'Screen-request
))
;//! \htmlinclude Screen-response.msg.html

(cl:defclass <Screen-response> (roslisp-msg-protocol:ros-message)
  ((scren
    :reader scren
    :initarg :scren
    :type cl:string
    :initform ""))
)

(cl:defclass Screen-response (<Screen-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <Screen-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'Screen-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-srv:<Screen-response> is deprecated: use backend-srv:Screen-response instead.")))

(cl:ensure-generic-function 'scren-val :lambda-list '(m))
(cl:defmethod scren-val ((m <Screen-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:scren-val is deprecated.  Use backend-srv:scren instead.")
  (scren m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <Screen-response>) ostream)
  "Serializes a message object of type '<Screen-response>"
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'scren))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'scren))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <Screen-response>) istream)
  "Deserializes a message object of type '<Screen-response>"
    (cl:let ((__ros_str_len 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'scren) (cl:make-string __ros_str_len))
      (cl:dotimes (__ros_str_idx __ros_str_len msg)
        (cl:setf (cl:char (cl:slot-value msg 'scren) __ros_str_idx) (cl:code-char (cl:read-byte istream)))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<Screen-response>)))
  "Returns string type for a service object of type '<Screen-response>"
  "backend/ScreenResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'Screen-response)))
  "Returns string type for a service object of type 'Screen-response"
  "backend/ScreenResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<Screen-response>)))
  "Returns md5sum for a message object of type '<Screen-response>"
  "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'Screen-response)))
  "Returns md5sum for a message object of type 'Screen-response"
  "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<Screen-response>)))
  "Returns full string definition for message of type '<Screen-response>"
  (cl:format cl:nil "string scren~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'Screen-response)))
  "Returns full string definition for message of type 'Screen-response"
  (cl:format cl:nil "string scren~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <Screen-response>))
  (cl:+ 0
     4 (cl:length (cl:slot-value msg 'scren))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <Screen-response>))
  "Converts a ROS message object to a list"
  (cl:list 'Screen-response
    (cl:cons ':scren (scren msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'Screen)))
  'Screen-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'Screen)))
  'Screen-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'Screen)))
  "Returns string type for a service object of type '<Screen>"
  "backend/Screen")