import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <aside className="w-64 bg-white h-full shadow-lg">
      <nav className="mt-10 px-6 space-y-4">
        <Link
          to="/admin/user-management" // Sync with "/admin/user-management"
          className="block py-2.5 px-4 text-gray-700 rounded hover:bg-gray-200 transition"
        >
          Quản lý người dùng
        </Link>
        <Link
          to="/admin/job-management" // Sync with "/admin/job-management"
          className="block py-2.5 px-4 text-gray-700 rounded hover:bg-gray-200 transition"
        >
          Quản lý công việc
        </Link>
        <Link
          to="/admin/job-type-management" // Sync with "/admin/job-type-management"
          className="block py-2.5 px-4 text-gray-700 rounded hover:bg-gray-200 transition"
        >
          Quản lý loại công việc
        </Link>
        <Link
          to="/admin/service-management" // Sync with "/admin/service-management"
          className="block py-2.5 px-4 text-gray-700 rounded hover:bg-gray-200 transition"
        >
          Quản lý dịch vụ
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
