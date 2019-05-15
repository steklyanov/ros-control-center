# Install script for directory: /home/max/catkin_ws/src/backend

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/max/catkin_ws/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/srv" TYPE FILE FILES
    "/home/max/catkin_ws/src/backend/srv/GetStatus.srv"
    "/home/max/catkin_ws/src/backend/srv/OrderStatus.srv"
    "/home/max/catkin_ws/src/backend/srv/Screen.srv"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/action" TYPE FILE FILES
    "/home/max/catkin_ws/src/backend/action/Order.action"
    "/home/max/catkin_ws/src/backend/action/PinCode.action"
    "/home/max/catkin_ws/src/backend/action/Review.action"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/msg" TYPE FILE FILES
    "/home/max/catkin_ws/devel/share/backend/msg/OrderAction.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/OrderActionGoal.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/OrderActionResult.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/OrderActionFeedback.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/OrderGoal.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/OrderResult.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/OrderFeedback.msg"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/msg" TYPE FILE FILES
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeAction.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeActionGoal.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeActionResult.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeActionFeedback.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeGoal.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeResult.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/PinCodeFeedback.msg"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/msg" TYPE FILE FILES
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewAction.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewActionGoal.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewActionResult.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewActionFeedback.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewGoal.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewResult.msg"
    "/home/max/catkin_ws/devel/share/backend/msg/ReviewFeedback.msg"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/cmake" TYPE FILE FILES "/home/max/catkin_ws/build/backend/catkin_generated/installspace/backend-msg-paths.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/max/catkin_ws/devel/include/backend")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "/home/max/catkin_ws/devel/share/roseus/ros/backend")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "/home/max/catkin_ws/devel/share/common-lisp/ros/backend")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "/home/max/catkin_ws/devel/share/gennodejs/ros/backend")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  execute_process(COMMAND "/usr/bin/python" -m compileall "/home/max/catkin_ws/devel/lib/python2.7/dist-packages/backend")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python2.7/dist-packages" TYPE DIRECTORY FILES "/home/max/catkin_ws/devel/lib/python2.7/dist-packages/backend")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/max/catkin_ws/build/backend/catkin_generated/installspace/backend.pc")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/cmake" TYPE FILE FILES "/home/max/catkin_ws/build/backend/catkin_generated/installspace/backend-msg-extras.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend/cmake" TYPE FILE FILES
    "/home/max/catkin_ws/build/backend/catkin_generated/installspace/backendConfig.cmake"
    "/home/max/catkin_ws/build/backend/catkin_generated/installspace/backendConfig-version.cmake"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/backend" TYPE FILE FILES "/home/max/catkin_ws/src/backend/package.xml")
endif()

