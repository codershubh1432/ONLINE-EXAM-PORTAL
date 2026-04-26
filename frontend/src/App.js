import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/homepage";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ExamPage from "./pages/exampage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResultPage from "./pages/resultpage";
import ProtectedRoute from "./components/ProtectedRoute";
import HelpPage from "./pages/helppage";
import ExplorePage from "./pages/explorepage";


function App() {

  
  const [searchResults, setSearchResults] = useState([]);

  const isAuth = () => {
    return !!localStorage.getItem("token");
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">

        
        <Navbar setSearchResults={setSearchResults} />

        <main className="flex-grow-1">

          <Routes>

            
            <Route
              path="/"
              element={<HomePage searchResults={searchResults} />}
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/helppage" element={<HelpPage />} />
            
            
<Route
  path="/explore"
  element={
    <ProtectedRoute>
      <ExplorePage searchResults={searchResults} />
    </ProtectedRoute>
  }
/>
           
            <Route
  path="/exam/:exam"
  element={
    <ProtectedRoute>
      <ExamPage />
    </ProtectedRoute>
  }
/>

          </Routes>

        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;