var login = require("facebook-chat-api");

module.exports = function(user, onSuccess) {
  var credentials = {
    email: user.email,
    password: user.password
  };
  login(credentials, function(err, api) {
    if(err) console.error(err);
    onSuccess(api);
  });
}
