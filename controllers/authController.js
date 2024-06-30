const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send("success");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body; // Assuming you're sending email and password in the request body
  try {
    const user = await User.findOne({ email });
    // Find the user by email
    if (user) {
      const same = await bcrypt.compare(password, user.password); // Compare passwords
      if (same) {
        // Create a user session or send a token
        req.session.userId=user._id;
        res.status(200).redirect("/");
      } else {
        res.status(401).send("Invalid password");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

exports.LogoutUser = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ status: "error", error: err.message });
    }
    res.redirect("/");
  });
};