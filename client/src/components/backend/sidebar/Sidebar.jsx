import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
  const navItems = [
    {
      category: 'dashboard',
      items: [
        { name: 'Home', link: '/' },
        { name: 'Overview', link: '/dashboard/overview' },
        { name: 'Products', link: '/dashboard/products' },
        { name: 'Brands', link: '/dashboard/brands' },
        { name: 'Analytics', link: '/dashboard/analytics' },
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
    <div className="sidebar-container">
      <div className="logo-wrapper">
        <h1 className="logo">
          <Link to={'/'}>E-Commerce</Link>
        </h1>
      </div>
      <div className="sidebar-nav">
        <ul>
          {navItems.map((item, index) => (
            <li className="sidebar-navItem" key={index}>
              {item.category}
              <ul>
                {item.items.map((item, index) => (
                  <NavLink to={item.link} key={index}>
                    <li>{item.name}</li>
                  </NavLink>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
