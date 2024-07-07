const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();
const roleMiddleware = require("../middlewares/roleMiddleware");

router.route("/").post(roleMiddleware(['teacher','admin']),courseController.CreateCourse);
router.route("/").get(courseController.GetAllCourses);
router.route("/:slug").get(courseController.GetCourse);

module.exports = router;