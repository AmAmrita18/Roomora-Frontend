import { createRoot } from "react-dom/client";
import "./assets/styles/global.css";
import Home from "./views/home/Home.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/about/About.jsx";
import Contact from "./views/contact/Contact.jsx";
import Properties from "./views/properties/Properties.jsx";
import PropertiesDetails from "./views/properties/PropertiesDetails.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Dashboard from "./views/dashboard/Dashboard.jsx";
import AdminProtectedRoute from "./utils/AdminProtectedRoute.jsx";
import AdminProfilePage from "./views/dashboard/AdminProfilePage.jsx";
import AddHotel from "./views/dashboard/AddHotel.jsx";
import Layout from "./Layout.jsx";
import Hotels from "./views/dashboard/Hotels.jsx";
import Users from "./views/dashboard/Users.jsx";
import Bookings from "./views/dashboard/Bookings.jsx";
import AdminLoginPage from "./views/AdminLoginPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import { Toaster } from "react-hot-toast";
import { UserProfile } from "./views/index.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="mainproperty" element={<Properties />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="property/:hotel_id" element={<PropertiesDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="profile"
            element={<ProtectedRoute element={<UserProfile />} />}
          />
        </Route>
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route
          path="/dashboard"
          element={<AdminProtectedRoute element={<Dashboard />} />}
        >
          <Route path="" element={<AdminProfilePage />} />
          <Route path="addHotel" element={<AddHotel />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="users" element={<Users />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
      </Routes>
    </Router>
    <Toaster />
  </AuthProvider>
);
