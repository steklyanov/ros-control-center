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

class GetStatusRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.order_id = null;
      this.pin_code = null;
    }
    else {
      if (initObj.hasOwnProperty('order_id')) {
        this.order_id = initObj.order_id
      }
      else {
        this.order_id = 0;
      }
      if (initObj.hasOwnProperty('pin_code')) {
        this.pin_code = initObj.pin_code
      }
      else {
        this.pin_code = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetStatusRequest
    // Serialize message field [order_id]
    bufferOffset = _serializer.int16(obj.order_id, buffer, bufferOffset);
    // Serialize message field [pin_code]
    bufferOffset = _serializer.string(obj.pin_code, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetStatusRequest
    let len;
    let data = new GetStatusRequest(null);
    // Deserialize message field [order_id]
    data.order_id = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [pin_code]
    data.pin_code = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.pin_code.length;
    return length + 6;
  }

  static datatype() {
    // Returns string type for a service object
    return 'backend/GetStatusRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5a933b66a339c8e24cb0bb060b44273a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int16 order_id
    string pin_code
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetStatusRequest(null);
    if (msg.order_id !== undefined) {
      resolved.order_id = msg.order_id;
    }
    else {
      resolved.order_id = 0
    }

    if (msg.pin_code !== undefined) {
      resolved.pin_code = msg.pin_code;
    }
    else {
      resolved.pin_code = ''
    }

    return resolved;
    }
};

class GetStatusResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.result = null;
      this.error = null;
    }
    else {
      if (initObj.hasOwnProperty('result')) {
        this.result = initObj.result
      }
      else {
        this.result = false;
      }
      if (initObj.hasOwnProperty('error')) {
        this.error = initObj.error
      }
      else {
        this.error = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetStatusResponse
    // Serialize message field [result]
    bufferOffset = _serializer.bool(obj.result, buffer, bufferOffset);
    // Serialize message field [error]
    bufferOffset = _serializer.string(obj.error, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetStatusResponse
    let len;
    let data = new GetStatusResponse(null);
    // Deserialize message field [result]
    data.result = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [error]
    data.error = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.error.length;
    return length + 5;
  }

  static datatype() {
    // Returns string type for a service object
    return 'backend/GetStatusResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '961d76fabb30d1ba4f6fcfaa355e1f26';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool result
    string error
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetStatusResponse(null);
    if (msg.result !== undefined) {
      resolved.result = msg.result;
    }
    else {
      resolved.result = false
    }

    if (msg.error !== undefined) {
      resolved.error = msg.error;
    }
    else {
      resolved.error = ''
    }

    return resolved;
    }
};

module.exports = {
  Request: GetStatusRequest,
  Response: GetStatusResponse,
  md5sum() { return '14ec8811dcefa7ddf3625f7bbef8560b'; },
  datatype() { return 'backend/GetStatus'; }
};
