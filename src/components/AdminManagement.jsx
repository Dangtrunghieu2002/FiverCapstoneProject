// components/AdminManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]); // Ensure admins is initialized as an array
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch admin data when component mounts
  useEffect(() => {
    fetchAdmins();
  }, []);

  // Fetch admins data from API
  const fetchAdmins = async () => {
    try {
      const response = await axios.get('/api/admins'); // Replace with your actual API endpoint
      // Set data safely ensuring it's an array
      setAdmins(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching admins:', error);
      setAdmins([]); // Set to empty array on error
    }
  };

  // Placeholder functions for search, edit, and delete actions
  const handleSearch = () => {
    // Implement search logic here if needed
    const filteredAdmins = admins.filter((admin) =>
      admin.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAdmins(filteredAdmins);
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit admin with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete admin with ID: ${id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Thêm quản trị viên</h2>
      {/* Search Input */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
          className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition"
          onClick={handleSearch}
        >
          Tìm
        </button>
      </div>
      {/* Admins Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Mã Phim</th>
              <th className="px-4 py-2">Tên Phim</th>
              <th className="px-4 py-2">Hình Ảnh</th>
              <th className="px-4 py-2">Mô Tả</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Mã Nhóm</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through admins only if it's an array */}
            {Array.isArray(admins) && admins.length > 0 ? (
              admins.map((admin) => (
                <tr key={admin.id} className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{admin.id}</td>
                  <td className="px-4 py-2">{admin.username}</td>
                  <td className="px-4 py-2">
                    <img src={admin.image} alt="Admin Avatar" className="w-12 h-12 rounded-full" />
                  </td>
                  <td className="px-4 py-2">{admin.description}</td>
                  <td className="px-4 py-2">{admin.role}</td>
                  <td className="px-4 py-2">{admin.groupCode}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(admin.id)}
                      className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(admin.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                    >
                      X
                    </button>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
                      Xem thông tin chi tiết
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Không có dữ liệu để hiển thị
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination (simple example, adjust based on actual data) */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">prev</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">1</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">2</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">3</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">4</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">5</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">6</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">7</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">8</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">9</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">10</button>
        <button className="px-4 py-2 border rounded hover:bg-gray-100 transition">next</button>
      </div>
    </div>
  );
};

export default AdminManagement;
