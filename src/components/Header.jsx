import React from 'react';
import { RiNotification3Line, RiSearchLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center flex-1">
        <div className="relative w-64">
          <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <RiNotification3Line className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center">
              <span className="text-sm font-medium">
                {user?.name?.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">{user?.name}</span>
          </div>
          <button
            onClick={logout}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
            title="Logout"
          >
            <RiLogoutBoxRLine className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;