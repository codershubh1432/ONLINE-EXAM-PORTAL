const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  exam: String,
  question: String,
  options: [String],
  correctAnswer: String,
});

module.exports = mongoose.model("Question", questionSchema);