const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.session.userId });
    if (!user) {
      return res.redirect("/login");
    } 
    next();
  } catch (err) {
    return res.redirect("/login");
  }
};
