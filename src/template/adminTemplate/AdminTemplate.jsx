// AdminTemplate.jsx

import React from "react";
import { Outlet } from "react-router-dom"; // Make sure Outlet is imported
import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import AdminTopBar from "../../components/AdminTopBar/AdminTopBar";

const AdminTemplate = ({ children }) => {
  return (
    <div className="admin-template">
      <div className="admin-content">
        <main>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AdminTemplate;
