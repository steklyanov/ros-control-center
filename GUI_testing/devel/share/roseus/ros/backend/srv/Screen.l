;; Auto-generated. Do not edit!


(when (boundp 'backend::Screen)
  (if (not (find-package "BACKEND"))
    (make-package "BACKEND"))
  (shadow 'Screen (find-package "BACKEND")))
(unless (find-package "BACKEND::SCREEN")
  (make-package "BACKEND::SCREEN"))
(unless (find-package "BACKEND::SCREENREQUEST")
  (make-package "BACKEND::SCREENREQUEST"))
(unless (find-package "BACKEND::SCREENRESPONSE")
  (make-package "BACKEND::SCREENRESPONSE"))

(in-package "ROS")





(defclass backend::ScreenRequest
  :super ros::object
  :slots ())

(defmethod backend::ScreenRequest
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

(defclass backend::ScreenResponse
  :super ros::object
  :slots (_scren ))

(defmethod backend::ScreenResponse
  (:init
   (&key
    ((:scren __scren) "")
    )
   (send-super :init)
   (setq _scren (string __scren))
   self)
  (:scren
   (&optional __scren)
   (if __scren (setq _scren __scren)) _scren)
  (:serialization-length
   ()
   (+
    ;; string _scren
    4 (length _scren)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string _scren
       (write-long (length _scren) s) (princ _scren s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string _scren
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _scren (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(defclass backend::Screen
  :super ros::object
  :slots ())

(setf (get backend::Screen :md5sum-) "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(setf (get backend::Screen :datatype-) "backend/Screen")
(setf (get backend::Screen :request) backend::ScreenRequest)
(setf (get backend::Screen :response) backend::ScreenResponse)

(defmethod backend::ScreenRequest
  (:response () (instance backend::ScreenResponse :init)))

(setf (get backend::ScreenRequest :md5sum-) "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(setf (get backend::ScreenRequest :datatype-) "backend/ScreenRequest")
(setf (get backend::ScreenRequest :definition-)
      "---
string scren
")

(setf (get backend::ScreenResponse :md5sum-) "cfc14ddcda1e821d2cb8753bdcdc8ccd")
(setf (get backend::ScreenResponse :datatype-) "backend/ScreenResponse")
(setf (get backend::ScreenResponse :definition-)
      "---
string scren
")



(provide :backend/Screen "cfc14ddcda1e821d2cb8753bdcdc8ccd")


