import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { score = 0, total = 0, exam = "" } = location.state || {};

  const percentage = total ? ((score / total) * 100).toFixed(2) : 0;

  return (
    <div className="container mt-5 text-center">

      <div className="card shadow p-4">
        <h3>ONLINE EXAM PORTAL</h3>
        <br>
        </br>
        
        <p className="fs-2">Your Result</p>
        <p className="text-muted fs-4">Details For The Attended {exam} Exam</p>

        <h4 className="mt-3">
          Marks Obtain: <span className="badge bg-primary">{score}</span> / {total}
        </h4>

        <h5 className="mt-2">
          Percentage:{" "}
          <span className={`badge ${percentage >= 50 ? "bg-success" : "bg-danger"}`}>
            {percentage}%
          </span>
        </h5>

     <p className="text-muted fs-4"> {exam} Exam</p>

        <button
          className="btn btn-dark mt-3"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>

    </div>
  );
}

export default ResultPage;
