
(cl:in-package :asdf)

(defsystem "backend-srv"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "GetStatus" :depends-on ("_package_GetStatus"))
    (:file "_package_GetStatus" :depends-on ("_package"))
    (:file "OrderStatus" :depends-on ("_package_OrderStatus"))
    (:file "_package_OrderStatus" :depends-on ("_package"))
    (:file "Screen" :depends-on ("_package_Screen"))
    (:file "_package_Screen" :depends-on ("_package"))
  ))