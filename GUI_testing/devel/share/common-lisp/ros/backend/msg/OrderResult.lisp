; Auto-generated. Do not edit!


(cl:in-package backend-msg)


;//! \htmlinclude OrderResult.msg.html

(cl:defclass <OrderResult> (roslisp-msg-protocol:ros-message)
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

(cl:defclass OrderResult (<OrderResult>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <OrderResult>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'OrderResult)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name backend-msg:<OrderResult> is deprecated: use backend-msg:OrderResult instead.")))

(cl:ensure-generic-function 'result-val :lambda-list '(m))
(cl:defmethod result-val ((m <OrderResult>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-msg:result-val is deprecated.  Use backend-msg:result instead.")
  (result m))

(cl:ensure-generic-function 'error-val :lambda-list '(m))
(cl:defmethod error-val ((m <OrderResult>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader backend-msg:error-val is deprecated.  Use backend-msg:error instead.")
  (error m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <OrderResult>) ostream)
  "Serializes a message object of type '<OrderResult>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'result) 1 0)) ostream)
  (cl:let ((__ros_str_len (cl:length (cl:slot-value msg 'error))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) (cl:slot-value msg 'error))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <OrderResult>) istream)
  "Deserializes a message object of type '<OrderResult>"
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
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<OrderResult>)))
  "Returns string type for a message object of type '<OrderResult>"
  "backend/OrderResult")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'OrderResult)))
  "Returns string type for a message object of type 'OrderResult"
  "backend/OrderResult")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<OrderResult>)))
  "Returns md5sum for a message object of type '<OrderResult>"
  "961d76fabb30d1ba4f6fcfaa355e1f26")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'OrderResult)))
  "Returns md5sum for a message object of type 'OrderResult"
  "961d76fabb30d1ba4f6fcfaa355e1f26")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<OrderResult>)))
  "Returns full string definition for message of type '<OrderResult>"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Result~%bool result~%string error~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'OrderResult)))
  "Returns full string definition for message of type 'OrderResult"
  (cl:format cl:nil "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======~%# Result~%bool result~%string error~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <OrderResult>))
  (cl:+ 0
     1
     4 (cl:length (cl:slot-value msg 'error))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <OrderResult>))
  "Converts a ROS message object to a list"
  (cl:list 'OrderResult
    (cl:cons ':result (result msg))
    (cl:cons ':error (error msg))
))