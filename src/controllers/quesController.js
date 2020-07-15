const Ques = require("../models/question.js");
const { query } = require("express");
const {AppError,catchAsync} = require("../utils/appError")
 exports.createQues = catchAsync(async (req, res, next) => {
  const { title, description, tags, source } = req.body;
  if (!title || !description || !source) {
    next(new AppError(400, "Title, description and tags are required"));
  }

  const newQues = await Question.create({
    title,
    description,
    pictureURL,
    source,
    host,
    averageRating,
  });

  res.send(newQues);
}) 

exports.getQues = catchAsync(async (req,res,next) => {
    const ques = await Ques.find()
    res.json({})
}
)


// const mongoose = require("mongoose");

// const schema = new mongoose.Schema({
//   title: String,
//   pictureURL: String,
//   description: String,
//   difficulties: String,
//   rating: String,
//   source: String,

// });

// const Question = mongoose.model("Question", schema);

// module.exports = Question;
