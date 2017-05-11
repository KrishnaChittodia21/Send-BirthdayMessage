var _ = require("lodash");
var util = require("./util.js");
var log = require("./logger.js");

var getFriends = function(api, onSuccess) {
  log.info("Getting friends list...");
  api.getFriendsList(function(err, res){
    if(err) return log.error(err);
    onSuccess(api, res);
  });
};

var sendMessages = function(api, friends) {
  var birthdayFriends = _.filter(friends, "isBirthday");
  if (_.isEmpty(birthdayFriends)) {
    log.info("No one has birthday today!");
    return;
  }

  log.info("Sending messages...");
  _.map(birthdayFriends, function(friend){
    var msg = util.getWishes(friend);
    api.sendMessage(msg, friend.userID, function(err, res){
      if(err) return log.error(err);
      log.success("Sent message to " + friend.fullName);
    });
  })
};

module.exports = function(api) {
  getFriends(api, sendMessages);
};
