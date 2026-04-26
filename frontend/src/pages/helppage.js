import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HelpPage() {
  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h2 className="text-center mb-4 mt-5">📘 Help & Instructions</h2>

          
          <div className="mb-3">
            <h5>1️⃣ Signup First</h5>
            <p className="text-muted">
              If you are a new user, you must create an account using the signup
              page. Provide your basic details like name, email, and password.
            </p>
          </div>

          
          <div className="mb-3">
            <h5>2️⃣ Login to Your Account</h5>
            <p className="text-muted">
              After signup, login using your registered email and password to
              access the platform.
            </p>
          </div>

          
          <div className="mb-3">
            <h5>3️⃣ Choose a Test</h5>
            <p className="text-muted">
              login required Once logged in, you will see  homepage. Select
              the test you want to attempt.
            </p>
          </div>

          
          <div className="mb-3">
            <h5>4️⃣ Start the Test</h5>
            <p className="text-muted">
              Click on the <strong>"Start Test"</strong> button to begin your
              exam. Make sure you are ready before starting.
            </p>
          </div>

        
          <div className="mb-3">
            <h5>5️⃣ Attempt Questions</h5>
            <p className="text-muted">
              Read each question carefully and select the correct option. You can
              navigate between questions during the test.
            </p>
          </div>

        
          <div className="mb-3">
            <h5>6️⃣ Submit the Test</h5>
            <p className="text-muted">
              After completing all questions, click on the{" "}
              <strong>"Submit"</strong> button to finish your test and view your
              score.
            </p>
          </div>

          
          <div className="alert alert-warning mt-4">
            ⚠️ <strong>Important:</strong> Do not refresh or close the browser
            during the test, or your progress may be lost.
          </div>

          
          <div className="text-center mt-3">
            <button
              className="btn btn-primary px-4"
              onClick={() => window.history.back()}
            >
              ⬅ Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;