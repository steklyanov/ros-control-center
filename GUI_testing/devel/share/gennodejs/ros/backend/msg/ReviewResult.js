// Auto-generated. Do not edit!

// (in-package backend.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class ReviewResult {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.review = null;
    }
    else {
      if (initObj.hasOwnProperty('review')) {
        this.review = initObj.review
      }
      else {
        this.review = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ReviewResult
    // Serialize message field [review]
    bufferOffset = _serializer.byte(obj.review, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ReviewResult
    let len;
    let data = new ReviewResult(null);
    // Deserialize message field [review]
    data.review = _deserializer.byte(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 1;
  }

  static datatype() {
    // Returns string type for a message object
    return 'backend/ReviewResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a18028ab13b7ad75fc3e5bf152f3aa88';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Result
    byte review
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new ReviewResult(null);
    if (msg.review !== undefined) {
      resolved.review = msg.review;
    }
    else {
      resolved.review = 0
    }

    return resolved;
    }
};

module.exports = ReviewResult;