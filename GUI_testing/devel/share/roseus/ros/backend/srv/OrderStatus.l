;; Auto-generated. Do not edit!


(when (boundp 'backend::OrderStatus)
  (if (not (find-package "BACKEND"))
    (make-package "BACKEND"))
  (shadow 'OrderStatus (find-package "BACKEND")))
(unless (find-package "BACKEND::ORDERSTATUS")
  (make-package "BACKEND::ORDERSTATUS"))
(unless (find-package "BACKEND::ORDERSTATUSREQUEST")
  (make-package "BACKEND::ORDERSTATUSREQUEST"))
(unless (find-package "BACKEND::ORDERSTATUSRESPONSE")
  (make-package "BACKEND::ORDERSTATUSRESPONSE"))

(in-package "ROS")





(defclass backend::OrderStatusRequest
  :super ros::object
  :slots (_order_id ))

(defmethod backend::OrderStatusRequest
  (:init
   (&key
    ((:order_id __order_id) 0)
    )
   (send-super :init)
   (setq _order_id (round __order_id))
   self)
  (:order_id
   (&optional __order_id)
   (if __order_id (setq _order_id __order_id)) _order_id)
  (:serialization-length
   ()
   (+
    ;; int16 _order_id
    2
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int16 _order_id
       (write-word _order_id s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int16 _order_id
     (setq _order_id (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;;
   self)
  )

(defclass backend::OrderStatusResponse
  :super ros::object
  :slots (_status ))

(defmethod backend::OrderStatusResponse
  (:init
   (&key
    ((:status __status) "")
    )
   (send-super :init)
   (setq _status (string __status))
   self)
  (:status
   (&optional __status)
   (if __status (setq _status __status)) _status)
  (:serialization-length
   ()
   (+
    ;; string _status
    4 (length _status)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string _status
       (write-long (length _status) s) (princ _status s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string _status
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _status (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(defclass backend::OrderStatus
  :super ros::object
  :slots ())

(setf (get backend::OrderStatus :md5sum-) "954d97139ffd0d17e83f4320bddc89c8")
(setf (get backend::OrderStatus :datatype-) "backend/OrderStatus")
(setf (get backend::OrderStatus :request) backend::OrderStatusRequest)
(setf (get backend::OrderStatus :response) backend::OrderStatusResponse)

(defmethod backend::OrderStatusRequest
  (:response () (instance backend::OrderStatusResponse :init)))

(setf (get backend::OrderStatusRequest :md5sum-) "954d97139ffd0d17e83f4320bddc89c8")
(setf (get backend::OrderStatusRequest :datatype-) "backend/OrderStatusRequest")
(setf (get backend::OrderStatusRequest :definition-)
      "int16 order_id
---
string status
")

(setf (get backend::OrderStatusResponse :md5sum-) "954d97139ffd0d17e83f4320bddc89c8")
(setf (get backend::OrderStatusResponse :datatype-) "backend/OrderStatusResponse")
(setf (get backend::OrderStatusResponse :definition-)
      "int16 order_id
---
string status
")



(provide :backend/OrderStatus "954d97139ffd0d17e83f4320bddc89c8")


