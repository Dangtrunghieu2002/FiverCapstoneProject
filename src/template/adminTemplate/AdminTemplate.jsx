// AdminTemplate.jsx

import React from "react";
import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import AdminTopBar from "../../components/AdminTopBar/AdminTopBar";

const AdminTemplate = ({ children }) => {
  return (
    <div className="admin-template">
      <AdminTopBar />
      <div className="admin-content">
        <AdminSideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminTemplate;
