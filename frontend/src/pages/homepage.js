import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ searchResults }) {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  
  const examDetails = {
    "mca": {
      title: "MAH-MCA-CET",
      desc: "Practice Mca test.",
      img: "/MCA.png",
    },
    "software development": {
      title: "Software Development",
      desc: "Prepare for Software tests",
      img: "/course2.png",
    },
    "English Communication Skill": {
      title: "English Communication Skill",
      desc: "Practice english Communication",
      img: "/course31.png",
    },
  };

  
  const handleStart = (examType) => {
    const token = localStorage.getItem("token");

  
  if (!token) {
  setType("warning");
  setMessage("Please login first... Redirecting");

  
  localStorage.setItem("selectedExam", examType);

  setTimeout(() => {
    navigate("/login");
  }, 1000);

} else {
  
  localStorage.setItem("selectedExam", examType);


 navigate(`/exam/${examType}`);
}
 };

  
  const uniqueExams = searchResults && searchResults.length > 0
    ? [...new Set(searchResults.map(item => item.exam))]
    : Object.keys(examDetails); // show all if no search

  return (
    <div className="container-fluid p-0" style={{ marginTop: "70px" }}>

      
      {message && (
        <div className={`alert alert-${type} text-center m-0`}>
          {message}
        </div>
      )}

      
      <div className="position-relative">
        <img
          src="/heroimage.png"
          alt="Hero"
          className="img-fluid w-100"
          style={{ height: "50vh", objectFit: "cover" }}
        />

        <div className="position-absolute top-50 end-0 translate-middle-y text-end text-white pe-5">
          <h1 className="fw-bold">Start Your Journey</h1>
          <p className="lead">Test your skills anytime, anywhere</p>
         
<button
  onClick={() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("redirectAfterLogin", "/explore");
      navigate("/login");
    } else {
      navigate("/explore");
    }
  }}
  className="btn btn-dark mt-3 px-4 py-2"
>
  Explore Tests
</button>
        </div>
      </div>

      
      <div className="container mt-5">
        <h5 className="mb-4">Available Exams</h5>

        <div className="row">

          {uniqueExams.length > 0 ? (
            uniqueExams.map((exam) => {
              const details = examDetails[exam];

              
              if (!details) return null;

              return (
                <div className="col-md-4 mb-4" key={exam}>
                  <div className="card shadow-sm">
                    <img
                      src={details.img}
                      className="card-img-top"
                      alt={details.title}
                      style={{ height: "320px", objectFit: "cover" }}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{details.title}</h5>
                      <p className="card-text text-muted">{details.desc}</p>

                     
                      

<button
  onClick={() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("redirectAfterLogin", "/explore");
      navigate("/login");
    } else {
      navigate("/explore");
    }
  }}
  className="btn btn-dark mt-3 px-4 py-2"
>
  Explore Tests
</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center">No results found ❌</p>
          )}

        </div>
      </div>

    </div>
  );
}

export default HomePage;
