; Auto-generated. Do not edit!


(cl:in-package backend-srv)


;//! \htmlinclude GetStatus-request.msg.html

(cl:defclass <GetStatus-request> (roslisp-msg-protocol:ros-message)
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

(cl:defclass GetStatus-request (<GetStatus-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <GetStatus-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'GetStatus-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-srv:<GetStatus-request> is deprecated: use backend-srv:GetStatus-request instead.")))

(cl:ensure-generic-function 'order_id-val :lambda-list '(m))
(cl:defmethod order_id-val ((m <GetStatus-request>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:order_id-val is deprecated.  Use backend-srv:order_id instead.")
  (order_id m))

(cl:ensure-generic-function 'pin_code-val :lambda-list '(m))
(cl:defmethod pin_code-val ((m <GetStatus-request>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:pin_code-val is deprecated.  Use backend-srv:pin_code instead.")
  (pin_code m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <GetStatus-request>) ostream)
  "Serializes a message object of type '<GetStatus-request>"
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
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <GetStatus-request>) istream)
  "Deserializes a message object of type '<GetStatus-request>"
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
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<GetStatus-request>)))
  "Returns string type for a service object of type '<GetStatus-request>"
  "backend/GetStatusRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'GetStatus-request)))
  "Returns string type for a service object of type 'GetStatus-request"
  "backend/GetStatusRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<GetStatus-request>)))
  "Returns md5sum for a message object of type '<GetStatus-request>"
  "14ec8811dcefa7ddf3625f7bbef8560b")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'GetStatus-request)))
  "Returns md5sum for a message object of type 'GetStatus-request"
  "14ec8811dcefa7ddf3625f7bbef8560b")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<GetStatus-request>)))
  "Returns full string definition for message of type '<GetStatus-request>"
  (cl:format cl:nil "int16 order_id~%string pin_code~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'GetStatus-request)))
  "Returns full string definition for message of type 'GetStatus-request"
  (cl:format cl:nil "int16 order_id~%string pin_code~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <GetStatus-request>))
  (cl:+ 0
     2
     4 (cl:length (cl:slot-value msg 'pin_code))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <GetStatus-request>))
  "Converts a ROS message object to a list"
  (cl:list 'GetStatus-request
    (cl:cons ':order_id (order_id msg))
    (cl:cons ':pin_code (pin_code msg))
))
;//! \htmlinclude GetStatus-response.msg.html

(cl:defclass <GetStatus-response> (roslisp-msg-protocol:ros-message)
  ((result
    :reader result
    :initarg :result
    :type cl:boolean
    :initform cl:nil)
   (error
    :reader error
    :initarg :error
    :type cl:string
    :initform ""))
)

(cl:defclass GetStatus-response (<GetStatus-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <GetStatus-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'GetStatus-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-srv:<GetStatus-response> is deprecated: use backend-srv:GetStatus-response instead.")))

(cl:ensure-generic-function 'result-val :lambda-list '(m))
(cl:defmethod result-val ((m <GetStatus-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:result-val is deprecated.  Use backend-srv:result instead.")
  (result m))

(cl:ensure-generic-function 'error-val :lambda-list '(m))
(cl:defmethod error-val ((m <GetStatus-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-srv:error-val is deprecated.  Use backend-srv:error instead.")
  (error m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <GetStatus-response>) ostream)
  "Serializes a message object of type '<GetStatus-response>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'result) 1 0)) ostream)
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'error))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'error))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <GetStatus-response>) istream)
  "Deserializes a message object of type '<GetStatus-response>"
    (cl:setf (cl:slot-value msg 'result) (cl:not (cl:zerop (cl:read-byte istream))))
    (cl:let ((__ros_str_len 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'error) (cl:make-string __ros_str_len))
      (cl:dotimes (__ros_str_idx __ros_str_len msg)
        (cl:setf (cl:char (cl:slot-value msg 'error) __ros_str_idx) (cl:code-char (cl:read-byte istream)))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<GetStatus-response>)))
  "Returns string type for a service object of type '<GetStatus-response>"
  "backend/GetStatusResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'GetStatus-response)))
  "Returns string type for a service object of type 'GetStatus-response"
  "backend/GetStatusResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<GetStatus-response>)))
  "Returns md5sum for a message object of type '<GetStatus-response>"
  "14ec8811dcefa7ddf3625f7bbef8560b")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'GetStatus-response)))
  "Returns md5sum for a message object of type 'GetStatus-response"
  "14ec8811dcefa7ddf3625f7bbef8560b")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<GetStatus-response>)))
  "Returns full string definition for message of type '<GetStatus-response>"
  (cl:format cl:nil "bool result~%string error~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'GetStatus-response)))
  "Returns full string definition for message of type 'GetStatus-response"
  (cl:format cl:nil "bool result~%string error~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <GetStatus-response>))
  (cl:+ 0
     1
     4 (cl:length (cl:slot-value msg 'error))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <GetStatus-response>))
  "Converts a ROS message object to a list"
  (cl:list 'GetStatus-response
    (cl:cons ':result (result msg))
    (cl:cons ':error (error msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'GetStatus)))
  'GetStatus-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'GetStatus)))
  'GetStatus-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'GetStatus)))
  "Returns string type for a service object of type '<GetStatus>"
  "backend/GetStatus")