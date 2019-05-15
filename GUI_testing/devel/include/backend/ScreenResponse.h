// Generated by gencpp from file backend/ScreenResponse.msg
// DO NOT EDIT!


#ifndef BACKEND_MESSAGE_SCREENRESPONSE_H
#define BACKEND_MESSAGE_SCREENRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace backend
{
template <class ContainerAllocator>
struct ScreenResponse_
{
  typedef ScreenResponse_<ContainerAllocator> Type;

  ScreenResponse_()
    : scren()  {
    }
  ScreenResponse_(const ContainerAllocator& _alloc)
    : scren(_alloc)  {
  (void)_alloc;
    }



   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _scren_type;
  _scren_type scren;





  typedef boost::shared_ptr< ::backend::ScreenResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::backend::ScreenResponse_<ContainerAllocator> const> ConstPtr;

}; // struct ScreenResponse_

typedef ::backend::ScreenResponse_<std::allocator<void> > ScreenResponse;

typedef boost::shared_ptr< ::backend::ScreenResponse > ScreenResponsePtr;
typedef boost::shared_ptr< ::backend::ScreenResponse const> ScreenResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::backend::ScreenResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::backend::ScreenResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace backend

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'actionlib_msgs': ['/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'backend': ['/home/max/catkin_ws/devel/share/backend/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::backend::ScreenResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::backend::ScreenResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::backend::ScreenResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::backend::ScreenResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::backend::ScreenResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::backend::ScreenResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::backend::ScreenResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "cfc14ddcda1e821d2cb8753bdcdc8ccd";
  }

  static const char* value(const ::backend::ScreenResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xcfc14ddcda1e821dULL;
  static const uint64_t static_value2 = 0x2cb8753bdcdc8ccdULL;
};

template<class ContainerAllocator>
struct DataType< ::backend::ScreenResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "backend/ScreenResponse";
  }

  static const char* value(const ::backend::ScreenResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::backend::ScreenResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "string scren\n\
";
  }

  static const char* value(const ::backend::ScreenResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::backend::ScreenResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.scren);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ScreenResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::backend::ScreenResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::backend::ScreenResponse_<ContainerAllocator>& v)
  {
    s << indent << "scren: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.scren);
  }
};

} // namespace message_operations
} // namespace ros

#endif // BACKEND_MESSAGE_SCREENRESPONSE_H
