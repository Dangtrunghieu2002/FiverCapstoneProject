import React, { useState } from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx';
import AdminModal from '../../components/AdminModal/AdminModal.jsx';
import AdminForm from '../../components/AdminForm/AdminForm.jsx';

const JobManagementPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const jobList = [
        { id: 1, title: "Software Engineer", company: "Tech Corp", status: "Active" },
        { id: 2, title: "Product Manager", company: "Innovate Inc.", status: "Inactive" },
    ];

    const jobFields = [
        { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Enter job title' },
        { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Enter company name' },
        { name: 'status', label: 'Job Status', type: 'text', placeholder: 'Enter job status' },
    ];

    const handleAddJob = () => {
        setSelectedJob(null);
        setShowModal(true);
    };

    const handleEditJob = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleDeleteJob = (jobId) => {
        console.log('Deleted Job:', jobId);
    };

    const handleFormSubmit = (formData) => {
        console.log('Form Data Submitted:', formData);
        setShowModal(false);
    };

    return (
        <div className="h-screen flex flex-col">
            <AdminTopBar />
            <div className="flex flex-1">
                <AdminSideBar />
                <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
                    <h1 className="text-2xl font-semibold mb-4">Job Management</h1>
                    <button 
                        onClick={handleAddJob} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                    >
                        Add Job
                    </button>
                    <ManagementTable 
                        data={jobList} 
                        onEdit={handleEditJob} 
                        onDelete={handleDeleteJob} 
                    />
                    {showModal && (
                        <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Form data={selectedJob} fields={jobFields} onSubmit={handleFormSubmit} />
                        </AdminModal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobManagementPage;
