const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    gender: { type: String },
    role: { type: String },
  },
  { collection: 'users' }
);
const User = mongoose.model('User', userSchema);

module.exports = User;
