"use strict";

let { hello } = require("./functions");

module.exports.hello = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: hello(event.name),
        input: event
      },
      null,
      2
    )
  };
};
