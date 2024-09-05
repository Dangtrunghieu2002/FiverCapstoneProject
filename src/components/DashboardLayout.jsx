// components/DashboardLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import AdminManagement from './AdminManagement';
import Topbar from './Topbar';

const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Topbar at the top */}
      <Topbar />

      {/* Main content with Sidebar and AdminManagement */}
      <div className="flex flex-1 bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <AdminManagement />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

