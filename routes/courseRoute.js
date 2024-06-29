const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();

router.route("/").post(courseController.CreateCourse);
router.route("/").get(courseController.GetAllCourses);
router.route("/:slug").get(courseController.GetCourse);

module.exports = router;