// Const
var wish  = "\n Happy birthday to ";
var emoji = "\n ヾ(｡｀Д´｡)ﾉ彡☆"

var getWishes = function (friend) {
  var msg = wish + friend.fullName;
  return msg + emoji;
};

exports.getWishes = getWishes;
