import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Sidebar = lazy(() => import('../backend/sidebar/Sidebar'));
const Navbar = lazy(() => import('../backend/navbar/Navbar'));

const DashboardLayout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
