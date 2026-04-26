const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
// const sendMail = require("../utils/sendMail"); // optional

// ================= GET QUESTIONS BY EXAM =================
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


// ================= 🔍 SEARCH QUESTIONS / EXAMS =================
// router.get("/search", async (req, res) => {
//   try {
//     const query = req.query.q;

//     // ❗ prevent empty search
//     if (!query) {
//       return res.json([]);
//     }

//     const results = await Question.find({
//       $or: [
//         { exam: { $regex: query, $options: "i" } },
//         { question: { $regex: query, $options: "i" } },
//       ],
//     })
//     .select("exam question") // return only needed fields
//     .limit(10);

//     res.json(results);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Search error" });
//   }
// });
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) return res.json([]);

    // 🔥 get unique exams only
    const exams = await Question.distinct("exam", {
      exam: { $regex: query, $options: "i" }
    });

    res.json(exams);

  } catch (err) {
    res.status(500).json({ message: "Search error" });
  }
});


// ================= SUBMIT EXAM =================
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


// ================= EXPORT =================
module.exports = router;