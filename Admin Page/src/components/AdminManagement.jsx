import React, { useState, useEffect } from 'react';
import api from '../service/api'; // Axios instance with base URL and headers

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({});

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

  useEffect(() => {
    fetchAdmins();
  }, [currentPage]);

  const fetchAdmins = async () => {
    try {
      const response = await api.get('/users/phan-trang-tim-kiem', {
        params: {
          pageIndex: currentPage,
          pageSize: 10,
          keyword: searchTerm,
        },
      });
      console.log(response.data.items);
      setAdmins(response.data.items || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error('Error fetching admins:', error);
      setAdmins([]); // Reset admins on error
    }
  };

  const handleSearch = async () => {
    setCurrentPage(1); // Reset to first page when searching
    fetchAdmins(); // Fetch admins with the search term
  };

  const handleEdit = async (adminId) => {
    try {
      const response = await api.get(`/users/${adminId}`);
      setEditingAdmin(response.data);
    } catch (error) {
      console.error(`Error fetching admin with ID: ${adminId}`, error);
    }
  };

  const saveEdit = async () => {
    try {
      const updatedAdmin = {
        id: editingAdmin.id,
        name: editingAdmin.name,
        email: editingAdmin.email,
        phone: editingAdmin.phone,
        birthday: editingAdmin.birthday,
        gender: editingAdmin.gender,
        role: editingAdmin.role,
        skill: editingAdmin.skill || [],
        certification: editingAdmin.certification || [],
      };

      await api.put(`/users/${editingAdmin.id}`, updatedAdmin);

      fetchAdmins();
      setEditingAdmin(null); // Close modal after saving
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  const addAdmin = async () => {
    try {
      await api.post('/users', newAdmin);
      fetchAdmins(); // Refetch the list of admins after adding a new one
    } catch (error) {
      console.error('Error adding new admin:', error);
    }
  };

  const handleDelete = async (adminId) => {
    try {
      await api.delete(`/users/${adminId}`);
      fetchAdmins(); // Refetch the list after deletion
    } catch (error) {
      console.error(`Error deleting admin with ID: ${adminId}`, error);
    }
  };

  const handleAvatarUpload = async (e, adminId) => {
    const formData = new FormData();
    formData.append('formFile', e.target.files[0]);

    try {
      await api.post(`/users/upload-avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: { id: adminId },
      });
      fetchAdmins();
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderHeaders = () => {
    if (admins.length === 0) return null;
    return Object.keys(columnMapping).map((key) => (
      <th key={key} className="px-4 py-2">
        {columnMapping[key]}
      </th>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Thêm quản trị viên</h2>
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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>{renderHeaders()}<th className="px-4 py-2">Actions</th></tr>
          </thead>
          <tbody>
            {Array.isArray(admins) && admins.length > 0 ? (
              admins.map((admin) => (
                <tr key={admin.id} className="border-t border-gray-200 hover:bg-gray-50 transition">{Object.keys(columnMapping).map((key) => (<td key={key} className="px-4 py-2">{typeof admin[key] === 'boolean' ? (admin[key] ? 'Nam' : 'Nữ') : admin[key]}</td>))}<td className="px-4 py-2 space-x-2">
                    <button onClick={() => handleEdit(admin.id)} className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition">Sửa</button>
                    <button onClick={() => handleDelete(admin.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">X</button>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">Xem thông tin chi tiết</button>
                    <input type="file" onChange={(e) => handleAvatarUpload(e, admin.id)} className="w-full mb-4"/></td>
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

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          prev
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          next
        </button>
      </div>

      {editingAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Edit Admin</h3>
            <input
              type="text"
              value={editingAdmin.username}
              onChange={(e) => setEditingAdmin({ ...editingAdmin, username: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
                        <input
              type="email"
              value={editingAdmin.email}
              onChange={(e) => setEditingAdmin({ ...editingAdmin, email: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editingAdmin.phone}
              onChange={(e) => setEditingAdmin({ ...editingAdmin, phone: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editingAdmin.role}
              onChange={(e) => setEditingAdmin({ ...editingAdmin, role: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={saveEdit}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setEditingAdmin(null)}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Add New Admin</h3>
        <input
          type="text"
          placeholder="Username"
          value={newAdmin.username || ''}
          onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newAdmin.email || ''}
          onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={newAdmin.password || ''}
          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Phone"
          value={newAdmin.phone || ''}
          onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Role"
          value={newAdmin.role || ''}
          onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addAdmin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Admin
        </button>
      </div>
    </div>
  );
};

export default AdminManagement;
