import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    // replace: true ensures the user can't go "back" to a locked page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;