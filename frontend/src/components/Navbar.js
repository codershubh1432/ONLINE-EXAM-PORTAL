import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function Navbar({ setSearchResults }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim()) {
        fetchResults();
      } else {
        setResults([]);
        setSearchResults([]);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  const fetchResults = async () => {
    try {
      const res = await fetch(
      
        `https://online-exam-portal-vs1n.onrender.com/api/search?q=${query}`
      );
      const data = await res.json();

      setResults(data);        
      setSearchResults(data);  
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = (examType) => {
    setQuery("");
    setResults([]);
    setSearchResults([]);
    navigate(`/exam/${examType}`);
  };

  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
  <div className="container-fluid">
    
    <Link className="navbar-brand fw-bold" to="/">
      Online Exam Portal
    </Link>

    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      
      <div className="mx-auto my-2 my-lg-0 d-flex position-relative" style={{ width: "100%", maxWidth: "500px" }}>
        <FaSearch
          style={{
            position: "absolute",
            top: "50%",
            left: "12px",
            transform: "translateY(-50%)",
            color: "gray",
            zIndex: 5
          }}
        />
        <input
          className="form-control ps-5"
          type="search"
          placeholder="Search exams..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        
        {results.length > 0 && (
          <div
            className="position-absolute bg-white shadow w-100 rounded"
            style={{ top: "100%", zIndex: 1000, mt: "5px", maxHeight: "300px", overflowY: "auto" }}
          >
            {results.map((exam, index) => (
              exam && (
                <div
                  key={index}
                  className="p-2 border-bottom result-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelect(exam)}
                >
                  <strong>{exam.toUpperCase()} Test</strong>
                </div>
              )
            ))}
          </div>
        )}

      
        {query && results.length === 0 && (
          <div className="position-absolute bg-white shadow w-100 mt-1 p-2 text-center" style={{ top: "100%", zIndex: 1000 }}>
            No results found 
          </div>
        )}
      </div>

      
      <div className="navbar-nav ms-auto align-items-center gap-2">
         <Link className="nav-link btn btn-outline-warning border-0 me-lg-2" to="/HelpPage">
          Help
        </Link>
        <Link className="nav-link btn btn-outline-primary border-0 me-lg-2" to="/">
          Home
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        ) : (
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>
            <Link className="btn btn-warning" to="/signup">
              Signup
            </Link>
          </div>
        )}
      </div>

    </div>
  </div>
</nav>
  );
}

export default Navbar;
