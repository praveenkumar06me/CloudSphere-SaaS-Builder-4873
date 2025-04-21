import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiDashboardLine, RiTeamLine, RiSettings4Line, RiBarChartLine } from 'react-icons/ri';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: RiDashboardLine, label: 'Dashboard' },
    { path: '/analytics', icon: RiBarChartLine, label: 'Analytics' },
    { path: '/team', icon: RiTeamLine, label: 'Team' },
    { path: '/settings', icon: RiSettings4Line, label: 'Settings' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600">SaaS App</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;