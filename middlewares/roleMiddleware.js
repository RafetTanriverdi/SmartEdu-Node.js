module.exports = (role) => {
  return async (req, res, next) => {
    const userRole = req.body.role;
    if (role.includes(userRole)) {
      next();
    } else {
      res.status(401).send("You do not have permission to perform this action");
    }
  };
};
