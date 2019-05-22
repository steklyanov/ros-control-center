// Generated by gencpp from file backend/OrderStatusResponse.msg
// DO NOT EDIT!


#ifndef BACKEND_MESSAGE_ORDERSTATUSRESPONSE_H
#define BACKEND_MESSAGE_ORDERSTATUSRESPONSE_H


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
struct OrderStatusResponse_
{
  typedef OrderStatusResponse_<ContainerAllocator> Type;

  OrderStatusResponse_()
    : status()  {
    }
  OrderStatusResponse_(const ContainerAllocator& _alloc)
    : status(_alloc)  {
  (void)_alloc;
    }



   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _status_type;
  _status_type status;





  typedef boost::shared_ptr< ::backend::OrderStatusResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::backend::OrderStatusResponse_<ContainerAllocator> const> ConstPtr;

}; // struct OrderStatusResponse_

typedef ::backend::OrderStatusResponse_<std::allocator<void> > OrderStatusResponse;

typedef boost::shared_ptr< ::backend::OrderStatusResponse > OrderStatusResponsePtr;
typedef boost::shared_ptr< ::backend::OrderStatusResponse const> OrderStatusResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::backend::OrderStatusResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::backend::OrderStatusResponse_<ContainerAllocator> >::stream(s, "", v);
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
struct IsFixedSize< ::backend::OrderStatusResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::backend::OrderStatusResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::backend::OrderStatusResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::backend::OrderStatusResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::backend::OrderStatusResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::backend::OrderStatusResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::backend::OrderStatusResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "4fe5af303955c287688e7347e9b00278";
  }

  static const char* value(const ::backend::OrderStatusResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x4fe5af303955c287ULL;
  static const uint64_t static_value2 = 0x688e7347e9b00278ULL;
};

template<class ContainerAllocator>
struct DataType< ::backend::OrderStatusResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "backend/OrderStatusResponse";
  }

  static const char* value(const ::backend::OrderStatusResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::backend::OrderStatusResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "string status\n\
";
  }

  static const char* value(const ::backend::OrderStatusResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::backend::OrderStatusResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.status);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct OrderStatusResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::backend::OrderStatusResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::backend::OrderStatusResponse_<ContainerAllocator>& v)
  {
    s << indent << "status: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.status);
  }
};

} // namespace message_operations
} // namespace ros

#endif // BACKEND_MESSAGE_ORDERSTATUSRESPONSE_H