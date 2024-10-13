import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is '/dashboard' or any sub-route of '/dashboard'
  const hideFooter = location.pathname.startsWith('/dashboard');

  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default Layout;
