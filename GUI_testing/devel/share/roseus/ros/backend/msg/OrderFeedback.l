;; Auto-generated. Do not edit!


(when (boundp 'backend::OrderFeedback)
  (if (not (find-package "BACKEND"))
    (make-package "BACKEND"))
  (shadow 'OrderFeedback (find-package "BACKEND")))
(unless (find-package "BACKEND::ORDERFEEDBACK")
  (make-package "BACKEND::ORDERFEEDBACK"))

(in-package "ROS")
;;//! \htmlinclude OrderFeedback.msg.html


(defclass backend::OrderFeedback
  :super ros::object
  :slots (_status ))

(defmethod backend::OrderFeedback
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

(setf (get backend::OrderFeedback :md5sum-) "4fe5af303955c287688e7347e9b00278")
(setf (get backend::OrderFeedback :datatype-) "backend/OrderFeedback")
(setf (get backend::OrderFeedback :definition-)
      "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
# Feedback
string status

")



(provide :backend/OrderFeedback "4fe5af303955c287688e7347e9b00278")

