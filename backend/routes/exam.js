const express = require("express");
const router = express.Router();
const Question = require("../models/Question");



router.get("/questions/:exam", async (req, res) => {
  try {
    const examType = req.params.exam;

    const questions = await Question.find({ exam: examType })
      .select("-correctAnswer"); // hide correct answer

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching questions" });
  }
});


router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) return res.json([]);

    
    const exams = await Question.distinct("exam", {
      exam: { $regex: query, $options: "i" }
    });

    res.json(exams);

  } catch (err) {
    res.status(500).json({ message: "Search error" });
  }
});



router.post("/submit", async (req, res) => {
  try {
    const { answers, exam } = req.body;

    const questions = await Question.find({ exam });

    let score = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });

  

    res.json({
      success: true,
      score,
      total: questions.length,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting exam" });
  }
});



module.exports = router;