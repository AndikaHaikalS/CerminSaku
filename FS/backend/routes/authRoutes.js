const express = require('express');

const router = express.Router();

const {
  register,
  verifyOtp,
  login,
  resetPassword
} = require(
  '../controllers/authController'
);

// REGISTER
router.post(
  '/register',
  register
);

// VERIFY OTP
router.post(
  '/verify-otp',
  verifyOtp
);

// LOGIN
router.post(
  '/login',
  login
);

// RESET PASSWORD
router.post(
  '/reset-password',
  resetPassword
);

module.exports =
  router;