var execute = require("./src/login.js");
var service = require("./src/service.js");

var user = {
    email: "Enter your valid email",
    password: "enter password for that email"
};

var checkTime = function(hour, minute, second) {
   var now = new Date();
   return (   now.getHours()   === hour
           && now.getMinutes() === minute
           && now.getSeconds() === second)
};

setInterval(function () {
   // You can setup start time here
   var is8AM = checkTime(08, 00, 00);
   if (is8AM) execute(user, service);
}, 1000);
