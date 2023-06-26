const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Generate JsonWebToken for user
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '21d'
  })
}

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } =  req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error('Add all fields');
  }

  // Check if user exist
  const userExist = await User.findOne({email});

  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }

  // Hast password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      __id: user.id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      paymentStatus: user.paymentStatus,
      role: user.role,
      token: generateToken(user.id, user.role).toString()
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data')
  };
});

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check user email
  const user = await User.findOne({email});

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      __id: user.id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      paymentStatus: user.paymentStatus,
      role: user.role,
      token: generateToken(user.id, user.role).toString()
    })
  } else {
    res.status(400);
    throw new Error('Invalid email or password')
  };


  res.json({message: 'Logined'});
});

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  getMe
}