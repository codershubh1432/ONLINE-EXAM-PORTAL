import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ExamPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();
  const { exam } = useParams(); 

 
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  
  useEffect(() => {
    fetch(`https://online-exam-portal-vs1n.onrender.com/api/questions/${exam}`) 
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
      })
      .catch(err => console.log(err));
  }, [exam]);

  
  const handleSelect = (qIndex, option) => {
    setAnswers(prev => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  
  const handleSubmit = async () => {
  try {
    const response = await fetch("https://online-exam-portal-vs1n.onrender.com/api/submit", {
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

  
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  
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