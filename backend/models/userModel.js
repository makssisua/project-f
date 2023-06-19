const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Add a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Add a last name'],
  },
  email: {
    type: String,
    required: [true, 'Add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Add a password'],
  },
  role: {
    type: String,
    default: 'user',
  },
  paymentStatus: {
    type: String,
    default: 'none'
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);