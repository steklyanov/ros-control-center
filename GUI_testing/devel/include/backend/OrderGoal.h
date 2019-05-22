// Generated by gencpp from file backend/OrderGoal.msg
// DO NOT EDIT!


#ifndef BACKEND_MESSAGE_ORDERGOAL_H
#define BACKEND_MESSAGE_ORDERGOAL_H


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
struct OrderGoal_
{
  typedef OrderGoal_<ContainerAllocator> Type;

  OrderGoal_()
    : order_id(0)
    , pin_code()  {
    }
  OrderGoal_(const ContainerAllocator& _alloc)
    : order_id(0)
    , pin_code(_alloc)  {
  (void)_alloc;
    }



   typedef int16_t _order_id_type;
  _order_id_type order_id;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _pin_code_type;
  _pin_code_type pin_code;





  typedef boost::shared_ptr< ::backend::OrderGoal_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::backend::OrderGoal_<ContainerAllocator> const> ConstPtr;

}; // struct OrderGoal_

typedef ::backend::OrderGoal_<std::allocator<void> > OrderGoal;

typedef boost::shared_ptr< ::backend::OrderGoal > OrderGoalPtr;
typedef boost::shared_ptr< ::backend::OrderGoal const> OrderGoalConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::backend::OrderGoal_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::backend::OrderGoal_<ContainerAllocator> >::stream(s, "", v);
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
struct IsFixedSize< ::backend::OrderGoal_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::backend::OrderGoal_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::backend::OrderGoal_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::backend::OrderGoal_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::backend::OrderGoal_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::backend::OrderGoal_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::backend::OrderGoal_<ContainerAllocator> >
{
  static const char* value()
  {
    return "5a933b66a339c8e24cb0bb060b44273a";
  }

  static const char* value(const ::backend::OrderGoal_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x5a933b66a339c8e2ULL;
  static const uint64_t static_value2 = 0x4cb0bb060b44273aULL;
};

template<class ContainerAllocator>
struct DataType< ::backend::OrderGoal_<ContainerAllocator> >
{
  static const char* value()
  {
    return "backend/OrderGoal";
  }

  static const char* value(const ::backend::OrderGoal_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::backend::OrderGoal_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======\n\
# Goal\n\
int16 order_id\n\
string pin_code\n\
";
  }

  static const char* value(const ::backend::OrderGoal_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::backend::OrderGoal_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.order_id);
      stream.next(m.pin_code);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct OrderGoal_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::backend::OrderGoal_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::backend::OrderGoal_<ContainerAllocator>& v)
  {
    s << indent << "order_id: ";
    Printer<int16_t>::stream(s, indent + "  ", v.order_id);
    s << indent << "pin_code: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.pin_code);
  }
};

} // namespace message_operations
} // namespace ros

#endif // BACKEND_MESSAGE_ORDERGOAL_H