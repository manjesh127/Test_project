var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})
var User = mongoose.model('User', UserSchema);

module.exports = {
  User
}