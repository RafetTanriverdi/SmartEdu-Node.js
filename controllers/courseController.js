const Course = require("../models/Course");
const Category = require("../models/Category");

exports.CreateCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.GetAllCourses = async (req, res) => {
  try {

    const categorySlug = req.query.category;
    const category = await Category.findOne({slug:categorySlug});

    let filter = {};
    if (categorySlug) {
      filter = { category: category._id };
    }


    const courses = await Course.find(filter);
    const categories = await Category.find();
    res.status(200).render("courses", {
      courses,
      pathName: "courses",
      categories,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.GetCourse = async (req, res) => {
    try {
        const course = await Course.findOne({slug:req.params.slug});
        res.status(200).render("course-single", {  
        course,
        pathName: "courses",
        });
    } catch (err) {
        res.status(404).json({
        status: "fail",
        message: err,
        });
    }
    }
