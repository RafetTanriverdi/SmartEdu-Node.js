const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const redirectMiddleware = require("../middlewares/redirectMiddleware");

router.route("/signup").post(redirectMiddleware,authController.CreateUser);
router.route("/login").post(redirectMiddleware,authController.LoginUser);
router.route("/logout").get(authMiddleware,authController.LogoutUser);
router.route("/dashboard").get(authMiddleware, authController.GetDashboardPage);

module.exports = router;
