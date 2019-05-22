// Generated by gencpp from file backend/Screen.msg
// DO NOT EDIT!


#ifndef BACKEND_MESSAGE_SCREEN_H
#define BACKEND_MESSAGE_SCREEN_H

#include <ros/service_traits.h>


#include <backend/ScreenRequest.h>
#include <backend/ScreenResponse.h>


namespace backend
{

struct Screen
{

typedef ScreenRequest Request;
typedef ScreenResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct Screen
} // namespace backend


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::backend::Screen > {
  static const char* value()
  {
    return "cfc14ddcda1e821d2cb8753bdcdc8ccd";
  }

  static const char* value(const ::backend::Screen&) { return value(); }
};

template<>
struct DataType< ::backend::Screen > {
  static const char* value()
  {
    return "backend/Screen";
  }

  static const char* value(const ::backend::Screen&) { return value(); }
};


// service_traits::MD5Sum< ::backend::ScreenRequest> should match 
// service_traits::MD5Sum< ::backend::Screen > 
template<>
struct MD5Sum< ::backend::ScreenRequest>
{
  static const char* value()
  {
    return MD5Sum< ::backend::Screen >::value();
  }
  static const char* value(const ::backend::ScreenRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::backend::ScreenRequest> should match 
// service_traits::DataType< ::backend::Screen > 
template<>
struct DataType< ::backend::ScreenRequest>
{
  static const char* value()
  {
    return DataType< ::backend::Screen >::value();
  }
  static const char* value(const ::backend::ScreenRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::backend::ScreenResponse> should match 
// service_traits::MD5Sum< ::backend::Screen > 
template<>
struct MD5Sum< ::backend::ScreenResponse>
{
  static const char* value()
  {
    return MD5Sum< ::backend::Screen >::value();
  }
  static const char* value(const ::backend::ScreenResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::backend::ScreenResponse> should match 
// service_traits::DataType< ::backend::Screen > 
template<>
struct DataType< ::backend::ScreenResponse>
{
  static const char* value()
  {
    return DataType< ::backend::Screen >::value();
  }
  static const char* value(const ::backend::ScreenResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // BACKEND_MESSAGE_SCREEN_H