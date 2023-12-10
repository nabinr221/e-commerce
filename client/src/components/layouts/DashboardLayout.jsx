import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer, MainContentWrapper, SidebarWrapper } from './style';
const Sidebar = lazy(() => import('../backend/sidebar/Sidebar'));
const Navbar = lazy(() => import('../backend/navbar/Navbar'));

const DashboardLayout = () => {
  return (
    <LayoutContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainContentWrapper>
        <Navbar />
        <Outlet />
      </MainContentWrapper>
    </LayoutContainer>
  );
};

export default DashboardLayout;
