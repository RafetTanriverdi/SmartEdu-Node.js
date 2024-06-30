const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/signup').post(authController.CreateUser);
router.route('/login').post(authController.LoginUser);
router.route('/logout').get(authController.LogoutUser);
module.exports = router;