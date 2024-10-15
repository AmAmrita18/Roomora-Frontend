import Footer from "./components/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

const Layout = () => {
  const location = useLocation();
  const { admin } = useContext(AuthContext);
  const navigate = useNavigate();

  const hideFooter = location.pathname.startsWith("/dashboard");

  useEffect(() => {
    if (admin) {
      navigate("/dashboard");
    }
  }, [admin, navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
