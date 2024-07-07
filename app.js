const express = require("express");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const pageRouter = require("./routes/pageRoute");
const courseRouter = require("./routes/courseRoute");
const categoryRouter = require("./routes/categoryRoute");
const userRouter = require("./routes/userRoute");

const app = express();

//connect db
mongoose
  .connect("mongodb://localhost:27017/smartEduDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

//templete engine
app.set("view engine", "ejs");

//global variable
global.userIN = null;

//middleware

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "smartedu",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/smartEduDb",
    }),
  })
);
app.use("*", (req, res, next) => {
  userIN = req.session.userId;
  next();
});


//routes
app.use("/", pageRouter);
app.use("/courses", courseRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
