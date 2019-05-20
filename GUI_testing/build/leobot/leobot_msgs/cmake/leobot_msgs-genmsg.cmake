# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "leobot_msgs: 2 messages, 0 services")

set(MSG_I_FLAGS "-Ileobot_msgs:/home/max/catkin_ws/src/leobot/leobot_msgs/msg;-Istd_msgs:/opt/ros/kinetic/share/std_msgs/cmake/../msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(leobot_msgs_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" NAME_WE)
add_custom_target(_leobot_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "leobot_msgs" "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" ""
)

get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" NAME_WE)
add_custom_target(_leobot_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "leobot_msgs" "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" ""
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/leobot_msgs
)
_generate_msg_cpp(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/leobot_msgs
)

### Generating Services

### Generating Module File
_generate_module_cpp(leobot_msgs
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/leobot_msgs
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(leobot_msgs_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(leobot_msgs_generate_messages leobot_msgs_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_cpp _leobot_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_cpp _leobot_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(leobot_msgs_gencpp)
add_dependencies(leobot_msgs_gencpp leobot_msgs_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS leobot_msgs_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/leobot_msgs
)
_generate_msg_eus(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/leobot_msgs
)

### Generating Services

### Generating Module File
_generate_module_eus(leobot_msgs
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/leobot_msgs
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(leobot_msgs_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(leobot_msgs_generate_messages leobot_msgs_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_eus _leobot_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_eus _leobot_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(leobot_msgs_geneus)
add_dependencies(leobot_msgs_geneus leobot_msgs_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS leobot_msgs_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/leobot_msgs
)
_generate_msg_lisp(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/leobot_msgs
)

### Generating Services

### Generating Module File
_generate_module_lisp(leobot_msgs
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/leobot_msgs
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(leobot_msgs_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(leobot_msgs_generate_messages leobot_msgs_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_lisp _leobot_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_lisp _leobot_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(leobot_msgs_genlisp)
add_dependencies(leobot_msgs_genlisp leobot_msgs_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS leobot_msgs_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/leobot_msgs
)
_generate_msg_nodejs(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/leobot_msgs
)

### Generating Services

### Generating Module File
_generate_module_nodejs(leobot_msgs
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/leobot_msgs
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(leobot_msgs_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(leobot_msgs_generate_messages leobot_msgs_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_nodejs _leobot_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_nodejs _leobot_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(leobot_msgs_gennodejs)
add_dependencies(leobot_msgs_gennodejs leobot_msgs_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS leobot_msgs_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/leobot_msgs
)
_generate_msg_py(leobot_msgs
  "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/leobot_msgs
)

### Generating Services

### Generating Module File
_generate_module_py(leobot_msgs
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/leobot_msgs
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(leobot_msgs_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(leobot_msgs_generate_messages leobot_msgs_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareStateRead.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_py _leobot_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/max/catkin_ws/src/leobot/leobot_msgs/msg/FirmwareCommandWrite.msg" NAME_WE)
add_dependencies(leobot_msgs_generate_messages_py _leobot_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(leobot_msgs_genpy)
add_dependencies(leobot_msgs_genpy leobot_msgs_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS leobot_msgs_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/leobot_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/leobot_msgs
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(leobot_msgs_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/leobot_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/leobot_msgs
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(leobot_msgs_generate_messages_eus std_msgs_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/leobot_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/leobot_msgs
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(leobot_msgs_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/leobot_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/leobot_msgs
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(leobot_msgs_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/leobot_msgs)
  install(CODE "execute_process(COMMAND \"/usr/bin/python\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/leobot_msgs\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/leobot_msgs
    DESTINATION ${genpy_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(leobot_msgs_generate_messages_py std_msgs_generate_messages_py)
endif()
