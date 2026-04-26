import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExplorePage({ searchResults }) {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  // 🎯 Exam UI details
  const examDetails = {
    "mca": {
      title: "MAH-MCA-CET",
      desc: "Practice MCA entrance test.",
      img: "/MCA.png",
    },
    "software development": {
      title: "Software Development",
      desc: "Prepare for developer interviews.",
      img: "/course2.png",
    },
    "English Communication Skill": {
      title: "English Communication",
      desc: "Improve your communication skills.",
      img: "/course31.png",
    },
  };

  // ✅ Start Exam Handler
//   const handleStart = (examType) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setType("warning");
//       setMessage("Please login first... Redirecting");

//       // ✅ Save selected exam
//       localStorage.setItem("selectedExam", examType);

//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     } else {
//       // ✅ Save and go to exam
//       localStorage.setItem("selectedExam", examType);
//       navigate(`/exam/${examType}`);
//     }
//   };
const handleStart = (examType) => {
  const token = localStorage.getItem("token");

  if (!token) {
    setType("warning");
    setMessage("Please login first... Redirecting");

    // ✅ Save redirect to explore (NOT exam)
    localStorage.setItem("redirectAfterLogin", "/explore");

    setTimeout(() => {
      navigate("/login");
    }, 1000);

  } else {
    // ✅ Directly start exam
    navigate(`/exam/${examType}`);
  }
};

  // 🔥 Unique exams from backend OR fallback
  const uniqueExams =
    searchResults && searchResults.length > 0
      ? [...new Set(searchResults.map((item) => item.exam))]
      : Object.keys(examDetails);

  return (
    <div className="container mt-5">

      {/* MESSAGE */}
      {message && (
        <div className={`alert alert-${type} text-center`}>
          {message}
        </div>
      )}

      {/* HEADER */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Explore Tests</h2>
        <p className="text-muted">
          Choose a test and start practicing instantly 🚀
        </p>
      </div>

      {/* CARDS */}
      <div className="row">
        {uniqueExams.length > 0 ? (
          uniqueExams.map((exam) => {
            const details = examDetails[exam];
            if (!details) return null;

            return (
              <div className="col-md-4 mb-4" key={exam}>
                <div className="card shadow-sm h-100">

                  <img
                    src={details.img}
                    className="card-img-top"
                    alt={details.title}
                    style={{ height: "325px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{details.title}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {details.desc}
                    </p>

                    <button
                      onClick={() => handleStart(exam)}
                      className="btn btn-primary mt-auto"
                    >
                      Start Exam
                    </button>
                  </div>

                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No exams found ❌</p>
        )}
      </div>

    </div>
  );
}

export default ExplorePage;