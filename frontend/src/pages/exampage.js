import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ExamPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();
  const { exam } = useParams(); // ✅ GET EXAM TYPE

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // 📥 Fetch questions based on exam
  useEffect(() => {
    fetch(`http://localhost:5000/api/questions/${exam}`) // ✅ FIXED
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
      })
      .catch(err => console.log(err));
  }, [exam]);

  // 📝 Select answer
  const handleSelect = (qIndex, option) => {
    setAnswers(prev => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  
  const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers,
        email: "user@gmail.com",
        exam,
      }),
    });

    const data = await response.json();

    // 🚀 GO TO RESULT PAGE
    navigate("/result", {
      state: {
        score: data.score,
        total: data.total,
        exam: exam
      }
    });

  } catch (error) {
    console.log(error);
    alert("Error submitting exam");
  }
};

  // 🚫 Disable right click
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  // 🚫 Warn before refresh
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-capitalize">{exam} Exam</h2>

      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="mb-4 p-3 border rounded">
            <h5>{index + 1}. {q.question}</h5>

            {q.options.map((opt, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={`q-${index}`}
                  value={opt}
                  onChange={() => handleSelect(index, opt)}
                />
                <label className="ms-2">{opt}</label>
              </div>
            ))}
          </div>
        ))
      )}

      <button className="btn btn-success" onClick={handleSubmit}>
        Submit Exam
      </button>
    </div>
  );
}

export default ExamPage;