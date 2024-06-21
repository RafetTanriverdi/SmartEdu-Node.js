const express = require("express");

const app = express();

//templete engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("index", { pathName: "index" });
});

app.get("/about", (req, res) => {
  res.status(200).render("about", { pathName: "about" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
