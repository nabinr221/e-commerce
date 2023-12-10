const User = require('../models/User');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerNewUser = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password = hashPassword;
  const data = await User.create(req.body);
  if (data) {
    res.json({
      msg: 'registration success',
    });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).lean();
  if (user) {
    try {
      const { email, password } = user;
      const isMatched = await bcrypt.compareSync(req.body.password, password);
      if (email && isMatched) {
        const token = jwt.sign(
          { email: req.body.email },
          process.env.SECRET_KEY
        );
        console.log(token);
        user.token = token;
        const { password, ...usersDataObj } = user;
        res.status(200).json({
          msg: 'logged in successfully',
          isLogedin: true,
          userData: usersDataObj,
        });
      } else {
        res.status(401).json({
          errorMsg: 'Invalid username and password',
        });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json({
      errorMsg: "User doesn't exist",
    });
  }
};

const getAllUser = async (req, res) => {
  const data = await User.find();
  if (data) {
    res.json({
      userList: data,
    });
  }
};

const getUserDetailsById = async (req, res) => {
  const data = await User.findById(req.params.id);
  if (data) {
    res.json({
      userList: data,
    });
  }
};

module.exports = { registerNewUser, loginUser, getAllUser, getUserDetailsById };
