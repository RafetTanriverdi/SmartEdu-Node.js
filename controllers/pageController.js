exports.getIndexPage = (req, res) => {
  console.log(req.session.userId);
  res.status(200).render("index", { pathName: "index" });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", { pathName: "about" });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", { pathName: "register" });
}

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", { pathName: "login" });
}
