;; Auto-generated. Do not edit!


(when (boundp 'backend::GetStatus)
  (if (not (find-package "BACKEND"))
    (make-package "BACKEND"))
  (shadow 'GetStatus (find-package "BACKEND")))
(unless (find-package "BACKEND::GETSTATUS")
  (make-package "BACKEND::GETSTATUS"))
(unless (find-package "BACKEND::GETSTATUSREQUEST")
  (make-package "BACKEND::GETSTATUSREQUEST"))
(unless (find-package "BACKEND::GETSTATUSRESPONSE")
  (make-package "BACKEND::GETSTATUSRESPONSE"))

(in-package "ROS")





(defclass backend::GetStatusRequest
  :super ros::object
  :slots (_order_id _pin_code ))

(defmethod backend::GetStatusRequest
  (:init
   (&key
    ((:order_id __order_id) 0)
    ((:pin_code __pin_code) "")
    )
   (send-super :init)
   (setq _order_id (round __order_id))
   (setq _pin_code (string __pin_code))
   self)
  (:order_id
   (&optional __order_id)
   (if __order_id (setq _order_id __order_id)) _order_id)
  (:pin_code
   (&optional __pin_code)
   (if __pin_code (setq _pin_code __pin_code)) _pin_code)
  (:serialization-length
   ()
   (+
    ;; int16 _order_id
    2
    ;; string _pin_code
    4 (length _pin_code)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int16 _order_id
       (write-word _order_id s)
     ;; string _pin_code
       (write-long (length _pin_code) s) (princ _pin_code s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int16 _order_id
     (setq _order_id (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; string _pin_code
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _pin_code (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(defclass backend::GetStatusResponse
  :super ros::object
  :slots (_result _error ))

(defmethod backend::GetStatusResponse
  (:init
   (&key
    ((:result __result) nil)
    ((:error __error) "")
    )
   (send-super :init)
   (setq _result __result)
   (setq _error (string __error))
   self)
  (:result
   (&optional __result)
   (if __result (setq _result __result)) _result)
  (:error
   (&optional __error)
   (if __error (setq _error __error)) _error)
  (:serialization-length
   ()
   (+
    ;; bool _result
    1
    ;; string _error
    4 (length _error)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _result
       (if _result (write-byte -1 s) (write-byte 0 s))
     ;; string _error
       (write-long (length _error) s) (princ _error s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _result
     (setq _result (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; string _error
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _error (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(defclass backend::GetStatus
  :super ros::object
  :slots ())

(setf (get backend::GetStatus :md5sum-) "14ec8811dcefa7ddf3625f7bbef8560b")
(setf (get backend::GetStatus :datatype-) "backend/GetStatus")
(setf (get backend::GetStatus :request) backend::GetStatusRequest)
(setf (get backend::GetStatus :response) backend::GetStatusResponse)

(defmethod backend::GetStatusRequest
  (:response () (instance backend::GetStatusResponse :init)))

(setf (get backend::GetStatusRequest :md5sum-) "14ec8811dcefa7ddf3625f7bbef8560b")
(setf (get backend::GetStatusRequest :datatype-) "backend/GetStatusRequest")
(setf (get backend::GetStatusRequest :definition-)
      "int16 order_id
string pin_code
---
bool result
string error
")

(setf (get backend::GetStatusResponse :md5sum-) "14ec8811dcefa7ddf3625f7bbef8560b")
(setf (get backend::GetStatusResponse :datatype-) "backend/GetStatusResponse")
(setf (get backend::GetStatusResponse :definition-)
      "int16 order_id
string pin_code
---
bool result
string error
")



(provide :backend/GetStatus "14ec8811dcefa7ddf3625f7bbef8560b")


