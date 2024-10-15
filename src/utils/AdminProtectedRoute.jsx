import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminProtectedRoute = ({ element }) => {
  const { admin } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Initial state for loading

  useEffect(() => {
    // Simulate a 500ms delay before checking admin status
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  if (loading) {
    // Show a loading indicator while waiting for admin check
    return <div>Loading...</div>;
  }

  if (!admin) {
    return <Navigate to="/adminLogin" replace />;
  }

  return element;
};

export default AdminProtectedRoute;
