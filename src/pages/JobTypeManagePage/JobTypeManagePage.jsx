import React, { useState } from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx';
import AdminModal from '../../components/AdminModal/AdminModal.jsx';
import AdminForm from '../../components/AdminForm/AdminForm.jsx'; // Assuming you have an AdminForm for the modal
import api from '../../service/api'; // Axios instance with tokenCybersoft

const JobTypeManagementPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Column mapping for job type management
    const columnMapping = {
        id: 'Job Type ID',
        tenLoaiCongViec: 'Job Type Name',
    };

    // Fetch job type data function
    const fetchJobTypes = async (currentPage, searchTerm) => {
        try {
            const response = await api.get('/loai-cong-viec', {
                params: { pageIndex: currentPage, pageSize: 10, keyword: searchTerm },
            });
            setTotalPages(response.data.totalPages);
            return {
                items: response.data.content, // Adjust based on actual API response structure
                totalPages: response.data.totalPages,
            };
        } catch (error) {
            console.error('Failed to fetch job types:', error);
            return { items: [], totalPages: 1 };
        }
    };

    // Add a new job type
    const addJobType = async (jobTypeData) => {
        try {
            const response = await api.post('/loai-cong-viec', jobTypeData);
            console.log('Job type added successfully:', response.data);
            // Optionally refetch the job types
            fetchJobTypes(currentPage, "");
        } catch (error) {
            console.error('Failed to add job type:', error);
        }
    };

    // Edit an existing job type
    const editJobType = async (jobTypeId, jobTypeData) => {
        try {
            const response = await api.put(`/loai-cong-viec/${jobTypeId}`, jobTypeData);
            console.log('Job type updated successfully:', response.data);
            // Optionally refetch the job types
            fetchJobTypes(currentPage, "");
        } catch (error) {
            console.error('Failed to update job type:', error);
        }
    };

    // Delete a job type
    const deleteJobType = async (jobTypeId) => {
        try {
            await api.delete(`/loai-cong-viec/${jobTypeId}`);
            console.log('Job type deleted successfully');
            // Optionally refetch the job types
            fetchJobTypes(currentPage, "");
        } catch (error) {
            console.error('Failed to delete job type:', error);
        }
    };

    const handleAddJobType = () => {
        setSelectedJobType(null);  // Clear the selected job type to create a new one
        setShowModal(true);
    };

    const handleEditJobType = (jobType) => {
        setSelectedJobType(jobType);  // Set the selected job type to edit
        setShowModal(true);
    };

    const handleDeleteJobType = (jobTypeId) => {
        deleteJobType(jobTypeId);
    };

    const handleFormSubmit = (jobTypeData) => {
        if (selectedJobType) {
            // Edit job type
            editJobType(selectedJobType.id, jobTypeData);
        } else {
            // Add new job type
            addJobType(jobTypeData);
        }
        setShowModal(false);
    };

    return (
        <div className="h-screen flex flex-col">
            <AdminTopBar />
            <div className="flex flex-1">
                <AdminSideBar />
                <div className="flex-1 p-6 overflow-y-auto">
                    <h1 className="text-2xl font-semibold mb-4">Job Type Management</h1>
                    <button 
                        onClick={handleAddJobType} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                    >
                        Add Job Type
                    </button>
                    <ManagementTable 
                        columnMapping={columnMapping}
                        fetchData={fetchJobTypes}
                        onEdit={handleEditJobType}
                        onDelete={handleDeleteJobType}  // Handle job type deletion
                    />
                    {showModal && (
                        <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <AdminForm
                                data={selectedJobType}
                                onSubmit={handleFormSubmit}  // Submit form data to add/edit job type
                            />
                        </AdminModal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobTypeManagementPage;
