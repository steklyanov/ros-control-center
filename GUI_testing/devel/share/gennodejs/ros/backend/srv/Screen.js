// Auto-generated. Do not edit!

// (in-package backend.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------


//-----------------------------------------------------------

class ScreenRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
    }
    else {
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ScreenRequest
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ScreenRequest
    let len;
    let data = new ScreenRequest(null);
    return data;
  }

  static getMessageSize(object) {
    return 0;
  }

  static datatype() {
    // Returns string type for a service object
    return 'backend/ScreenRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new ScreenRequest(null);
    return resolved;
    }
};

class ScreenResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.scren = null;
    }
    else {
      if (initObj.hasOwnProperty('scren')) {
        this.scren = initObj.scren
      }
      else {
        this.scren = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ScreenResponse
    // Serialize message field [scren]
    bufferOffset = _serializer.string(obj.scren, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ScreenResponse
    let len;
    let data = new ScreenResponse(null);
    // Deserialize message field [scren]
    data.scren = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.scren.length;
    return length + 4;
  }

  static datatype() {
    // Returns string type for a service object
    return 'backend/ScreenResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cfc14ddcda1e821d2cb8753bdcdc8ccd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string scren
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new ScreenResponse(null);
    if (msg.scren !== undefined) {
      resolved.scren = msg.scren;
    }
    else {
      resolved.scren = ''
    }

    return resolved;
    }
};

module.exports = {
  Request: ScreenRequest,
  Response: ScreenResponse,
  md5sum() { return 'cfc14ddcda1e821d2cb8753bdcdc8ccd'; },
  datatype() { return 'backend/Screen'; }
};
