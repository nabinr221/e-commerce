import { Link } from 'react-router-dom';
import {
  InnerList,
  InnerListItem,
  LogoWrapper,
  NavLinkItem,
  OuterList,
  OuterListItem,
  SidebarContainer,
  SidebarNav,
} from './style';

const Sidebar = () => {
  const navItems = [
    {
      category: 'dashboard',
      items: [
        { name: 'Home', link: '/dashboard' },
        { name: 'Brands', link: '/dashboard/brands' },
        { name: 'Category', link: '/dashboard/category' },
        { name: 'Products', link: '/dashboard/products' },
        // { name: 'Products', link: '/dashboard/products' },
        { name: 'Analytics', link: '/dashboard/analytics' },
        { name: 'Overview', link: '/dashboard/overview' },
        { name: 'Performance', link: '/dashboard/performance' },
      ],
    },
    {
      category: 'charts',
      items: [
        { name: 'Bar Chart', link: '/charts/bar-chart' },
        { name: 'Pie Chart', link: '/charts/pie-chart' },
        { name: 'Line Chart', link: '/charts/line-chart' },
      ],
    },
    {
      category: 'reports',
      items: [
        { name: 'Daily Reports', link: '/reports/daily-reports' },
        { name: 'Weekly Reports', link: '/reports/weekly-reports' },
        { name: 'Monthly Reports', link: '/reports/monthly-reports' },
      ],
    },
    {
      category: 'settings',
      items: [
        { name: 'User Settings', link: '/settings/user-settings' },
        { name: 'Preferences', link: '/settings/preferences' },
        { name: 'Security', link: '/settings/security' },
      ],
    },
  ];

  return (
    <SidebarContainer>
      <LogoWrapper>
        <h1>
          <Link to={'dashboard/'}>E-Commerce</Link>
        </h1>
      </LogoWrapper>
      <SidebarNav>
        <OuterList>
          {navItems.map((item, index) => (
            <OuterListItem key={index}>
              {item.category}
              <InnerList>
                {item.items.map((item, index) => (
                  <NavLinkItem to={item.link} key={index} end>
                    <InnerListItem> {item.name}</InnerListItem>
                  </NavLinkItem>
                ))}
              </InnerList>
            </OuterListItem>
          ))}
        </OuterList>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
