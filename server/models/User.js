const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const userController = require('../../controllers/userController');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  userController.registerUser
);

// @route    POST api/users/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', userController.authenticateUser);

module.exports = router;
