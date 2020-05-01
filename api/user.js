var {
  User
} = require('../model/user')

module.exports = {
  signupUser: async (req, res) => {
    try {
      let {
        name,
        email,
        password
      } = req.body
      if (name == null || name == undefined || !name || email == null || email == undefined || !email || password == null || password == undefined || !password) {
        res.status(200).send({
          success: false,
          message: "Please send all the required faileds !"
        })
      } else {
        var finduser = await User.findOne({
          email: email
        })
        if (finduser) {
          res.status(200).send({
            success: false,
            message: "User already registered !"
          })
        } else {
          new User({
            name: name,
            email: email,
            password: password
          }).save().then(user => {
            if (user) {
              res.status(200).send({
                success: true,
                message: "User successfully signup !"
              })
            } else {
              res.status(200).send({
                success: false,
                message: "please try again !"
              })
            }
          }).catch(er => {
            console.log("save user failed", er)
            res.status(500).send({
              success: false,
              message: "Please try again !"
            })
          })
        }
      }
    } catch (error) {
      console.log("signup user error", error)
      res.status(500).send({
        success: false,
        message: "Internal server error"
      })
    }
  },
  loginuser: async (req, res) => {

  }
}