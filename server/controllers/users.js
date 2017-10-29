const user = require('../models/user');

class UserX {
  static LoginFB (req, res){
    user.login()
    .then(dataUser => res.send(dataUser))
    .catch(err => res.send(err))
  }
}

module.exports = UserX;
