import React, { useState } from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx';
import AdminModal from '../../components/AdminModal/AdminModal.jsx';
import AdminForm from '../../components/AdminForm/AdminForm.jsx';

const ServiceManagementPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const serviceList = [
        { id: 1, title: "Web Development", provider: "John Doe", status: "Active" },
        { id: 2, title: "Graphic Design", provider: "Jane Smith", status: "Inactive" },
        // Add more services here
    ];

    const handleAddService = () => {
        setSelectedService(null);
        setShowModal(true);
    };

    const handleEditService = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleDeleteService = (serviceId) => {
        // Logic for deleting a service
        console.log('Deleted Service:', serviceId);
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
                    <h1>Service Management</h1>
                    <button onClick={handleAddService}>Add Service</button>
                    <ManagementTable 
                        data={serviceList} 
                        onEdit={handleEditService} 
                        onDelete={handleDeleteService} 
                    />
                    {showModal && (
                        <AdminModal onClose={() => setShowModal(false)}>
                            <Form data={selectedService} onSubmit={handleFormSubmit} />
                        </AdminModal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceManagementPage;
