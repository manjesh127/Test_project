var express = require('express');
var router = express.Router();
var {
  signupUser,
  loginuser
} = require('../api/user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Hii,Api routes are working');
});
router.post('/signup', signupUser)
module.exports = router;