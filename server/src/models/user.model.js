const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
    address: { type: String },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    role: { type: String, enum: ['admin', 'client'] },
  },
  { collection: 'users' },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

module.exports = User;
