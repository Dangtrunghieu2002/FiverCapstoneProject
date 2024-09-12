import React, { useState, useEffect } from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar.jsx';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar.jsx';
import ManagementTable from '../../components/ManagementTable/ManagementTable.jsx';
import AdminModal from '../../components/AdminModal/AdminModal.jsx';
import api from '../../service/api';

const ServiceManagementPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [services, setServices] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    // Column mapping for service management
    const columnMapping = {
        id: 'Service ID',
        tenCongViec: 'Service Title',
        nguoiThue: 'Provider Name',
        trangThai: 'Status',
    };

    // Fetch service data
    const fetchServices = async (page = 1, keyword = "") => {
        try {
            const response = await api.get('/thue-cong-viec', {
                params: { 
                    pageIndex: page, 
                    pageSize: 10, 
                    keyword 
                },
            });
            setServices(response.data.content); // Adjust based on actual API response structure
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Failed to fetch services:', error);
        }
    };

    useEffect(() => {
        fetchServices(currentPage, searchTerm);
    }, [currentPage, searchTerm]);

    // Function to add a new service
    const handleAddService = () => {
        setSelectedService(null);
        setShowModal(true);
    };

    // Function to edit an existing service
    const handleEditService = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    // Function to handle form submission for add/edit
    const handleFormSubmit = async (formData) => {
        try {
            if (selectedService) {
                // If a service is selected, we are editing
                await api.put(`/thue-cong-viec/${selectedService.id}`, formData);
            } else {
                // If no service is selected, we are adding
                await api.post('/thue-cong-viec', formData);
            }
            setShowModal(false);
            fetchServices(currentPage, searchTerm); // Refresh the table data
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    // Function to delete a service
    const handleDeleteService = async (id) => {
        try {
            await api.delete(`/thue-cong-viec/${id}`);
            fetchServices(currentPage, searchTerm); // Refresh the table data
        } catch (error) {
            console.error('Failed to delete service:', error);
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <AdminTopBar />
            <div className="flex flex-1">
                <AdminSideBar />
                <div className="flex-1 p-6 overflow-y-auto">
                    <h1 className="text-2xl font-semibold mb-4">Service Management</h1>
                    <button 
                        onClick={handleAddService} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                    >
                        Add Service
                    </button>
                    <ManagementTable 
                        columnMapping={columnMapping}
                        data={services}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEdit={handleEditService}
                        onDelete={handleDeleteService}
                    />
                    {showModal && (
                        <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <AdminForm 
                                data={selectedService} 
                                onSubmit={handleFormSubmit} 
                                fields={[
                                    { name: 'tenCongViec', label: 'Service Title', type: 'text' },
                                    { name: 'nguoiThue', label: 'Provider Name', type: 'text' },
                                    { name: 'trangThai', label: 'Status', type: 'text' }
                                ]}
                            />
                        </AdminModal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceManagementPage;
