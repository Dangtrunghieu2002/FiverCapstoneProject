import React, { useState } from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx';
import AdminModal from '../../components/AdminModal/AdminModal.jsx';
import AdminForm from '../../components/AdminForm/AdminForm.jsx'; // Assuming you have an AdminForm for the modal
import api from '../../service/api'; // Importing the configured axios instance

const JobManagementPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Column mapping for job management
    const columnMapping = {
        id: 'Job ID',
        tenCongViec: 'Job Title',
        moTa: 'Description',
        giaTien: 'Price',
        nguoiTao: 'Creator ID',
        saoCongViec: 'Rating',
        danhGia: 'Reviews',
    };

    // Fetch job data function
    const fetchJobs = async (currentPage, searchTerm) => {
        try {
            const response = await api.get('/cong-viec', {
                params: { pageIndex: currentPage, pageSize: 10, keyword: searchTerm },
            });

            // Safeguard: Ensure that response.data.content is always an array
            return {
            items: Array.isArray(response.data.content) ? response.data.content : [],
            totalPages: response.data.totalPages || 1,
            };
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
            return { items: [], totalPages: 1 };
        }
    };

    // Add a new job
    const addJob = async (jobData) => {
        try {
            const response = await api.post('/cong-viec', jobData);
            console.log('Job added successfully:', response.data);
            // Optionally refetch the jobs
            fetchJobs(currentPage, "");
        } catch (error) {
            console.error('Failed to add job:', error);
        }
    };

    // Edit an existing job
    const editJob = async (jobId, jobData) => {
        try {
            const response = await api.put(`/cong-viec/${jobId}`, jobData);
            console.log('Job updated successfully:', response.data);
            // Optionally refetch the jobs
            fetchJobs(currentPage, "");
        } catch (error) {
            console.error('Failed to update job:', error);
        }
    };

    // Delete a job
    const deleteJob = async (jobId) => {
        try {
            await api.delete(`/cong-viec/${jobId}`);
            console.log('Job deleted successfully');
            // Optionally refetch the jobs
            fetchJobs(currentPage, "");
        } catch (error) {
            console.error('Failed to delete job:', error);
        }
    };

    const handleAddJob = () => {
        setSelectedJob(null);  // Clear the selected job to create a new one
        setShowModal(true);
    };

    const handleEditJob = (job) => {
        setSelectedJob(job);  // Set the selected job to edit
        setShowModal(true);
    };

    const handleDeleteJob = (jobId) => {
        deleteJob(jobId);
    };

    const handleFormSubmit = (jobData) => {
        if (selectedJob) {
            // Edit job
            editJob(selectedJob.id, jobData);
        } else {
            // Add new job
            addJob(jobData);
        }
        setShowModal(false);
    };

    return (
        <div className="h-screen flex flex-col">
            <AdminTopBar />
            <div className="flex flex-1">
                <AdminSideBar />
                <div className="flex-1 p-6 overflow-y-auto">
                    <h1 className="text-2xl font-semibold mb-4">Job Management</h1>
                    <button 
                        onClick={handleAddJob} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                    >
                        Add Job
                    </button>
                    <ManagementTable 
                        columnMapping={columnMapping}
                        fetchData={fetchJobs}
                        onEdit={handleEditJob}
                        onDelete={handleDeleteJob}  // Handle job deletion
                    />
                    {showModal && (
                        <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <AdminForm
                                data={selectedJob}
                                onSubmit={handleFormSubmit}  // Submit form data to add/edit job
                            />
                        </AdminModal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobManagementPage;
