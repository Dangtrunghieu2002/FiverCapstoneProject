import React from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx'; // Reusable table component
import api from '../../service/api';

const UserManagePage = () => {
  // Column mapping for user management
  const columnMapping = {
    id: 'Mã Người Dùng',
    username: 'Tên Tài Khoản',
    email: 'Email',
    phone: 'Số Điện Thoại',
    birthday: 'Ngày Sinh',
    gender: 'Giới Tính',
    role: 'Vai Trò',
    groupCode: 'Mã Nhóm',
    skill: 'Kỹ Năng',
    certification: 'Chứng Chỉ',
  };

  // Fetch user data function
  const fetchUsers = async (currentPage, searchTerm) => {
    try {
      const response = await api.get('/users', {
        params: { pageIndex: currentPage, pageSize: 10, keyword: searchTerm },
      });
      
      // Return data in the expected format for ManagementTable
      return {
        items: response.data.content,  // Assuming 'content' contains the list of users
        totalPages: response.data.totalPages // Adjust based on API response
      };
    } catch (error) {
      console.error('Failed to fetch users:', error);
      return [];
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <AdminTopBar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSideBar />

        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Quản lý người dùng</h2>
          <ManagementTable columnMapping={columnMapping} fetchData={fetchUsers} />
        </div>
      </div>
    </div>
  );
};

export default UserManagePage;
