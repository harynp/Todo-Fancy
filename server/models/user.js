const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FB = require('fb');
const jwt = require('jsonwebtoken')


let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

let Userdata = mongoose.model('Userdata', userSchema);

class User {
  static login(req,res) {
    let fb = new FB.facebook({
      token: req.body.token,
      appFBID: process.env.FacebookApiId,
      appFBSecret: process.env.FacebookApiSecretId
    })
    fb.api(req.body.userId, function (response){
      if(response.error){
        res.send(error)
      } else {
        if(req.body.userId == response.id) {
          Userdata.username = response.id
          Userdata.password = response.name
            Userdata.findOne({username: response.id})
            .then(()=> {
              var token = jwt.sign({
                id: response.id,
                username: response.name,
              },'Berhasil Login');
            })
            .catch(err => res.send(err))
        } else {
          res.send('You not Owner this account !')
        }
      }
    })
  }
}

module.exports = User
