;; Auto-generated. Do not edit!


(when (boundp 'backend::ReviewFeedback)
  (if (not (find-package "BACKEND"))
    (make-package "BACKEND"))
  (shadow 'ReviewFeedback (find-package "BACKEND")))
(unless (find-package "BACKEND::REVIEWFEEDBACK")
  (make-package "BACKEND::REVIEWFEEDBACK"))

(in-package "ROS")
;;//! \htmlinclude ReviewFeedback.msg.html


(defclass backend::ReviewFeedback
  :super ros::object
  :slots ())

(defmethod backend::ReviewFeedback
  (:init
   (&key
    )
   (send-super :init)
   self)
  (:serialization-length
   ()
   (+
    0
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;;
   self)
  )

(setf (get backend::ReviewFeedback :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get backend::ReviewFeedback :datatype-) "backend/ReviewFeedback")
(setf (get backend::ReviewFeedback :definition-)
      "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
# Feedback

")



(provide :backend/ReviewFeedback "d41d8cd98f00b204e9800998ecf8427e")

