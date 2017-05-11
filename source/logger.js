var PREFIX_INFO = "[INFO] ";
var PREFIX_ERROR = "[ERROR] ";
var PREFIX_SUCCESS = "[SUCCESS] ";

var info = function(msg) {
  console.info(PREFIX_INFO + msg);
};

var success = function(msg) {
  console.info(PREFIX_SUCCESS + msg);
};

var error = function(msg) {
  console.error(PREFIX_ERROR + msg);
};

exports.info = info;
exports.error = error;
exports.success = success;
