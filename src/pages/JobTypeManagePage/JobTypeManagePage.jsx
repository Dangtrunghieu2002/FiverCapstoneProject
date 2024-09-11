import React, { useState } from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx';
import AdminModal from '../../components/AdminModal/AdminModal.jsx';
import AdminForm from '../../components/AdminForm/AdminForm.jsx';

const JobTypeManagementPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState(null);

    const jobTypeList = [
        { id: 1, title: "Full-time", description: "40 hours per week" },
        { id: 2, title: "Part-time", description: "Less than 40 hours per week" },
        // Add more job types here
    ];

    const handleAddJobType = () => {
        setSelectedJobType(null);
        setShowModal(true);
    };

    const handleEditJobType = (jobType) => {
        setSelectedJobType(jobType);
        setShowModal(true);
    };

    const handleDeleteJobType = (jobTypeId) => {
        // Logic for deleting a job type
        console.log('Deleted Job Type:', jobTypeId);
    };

    const handleFormSubmit = (formData) => {
        console.log('Form Data Submitted:', formData);
        setShowModal(false);
        // Submit the form data for add/edit
    };

    return (
        <div className="admin-page">
            <AdminTopBar />
            <div className="admin-content">
                <AdminSideBar />
                <div className="main-content">
                    <h1>Job Type Management</h1>
                    <button onClick={handleAddJobType}>Add Job Type</button>
                    <ManagementTable 
                        data={jobTypeList} 
                        onEdit={handleEditJobType} 
                        onDelete={handleDeleteJobType} 
                    />
                    {showModal && (
                        <AdminModal onClose={() => setShowModal(false)}>
                            <Form data={selectedJobType} onSubmit={handleFormSubmit} />
                        </AdminModal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobTypeManagementPage;
