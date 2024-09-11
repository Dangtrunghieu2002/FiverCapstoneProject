import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import AdminTemplate from "../template/adminTemplate/AdminTemplate";
import UserTemplate from "../template/userTemplate/UserTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import LoginPage from "../pages/LoginPage/LoginPage";
import IndexPage from "../pages/IndexPage/IndexPage";
import JobManagePage from "../pages/JobManagePage/JobManagePage";
import JobTypeManagePage from "../pages/JobTypeManagePage/JobTypeManagePage";
import ServiceManagePage from "../pages/ServiceManagePage/ServiceManagePage";
import UserManagePage from "../pages/UserManagePage/UserManagePage";

// Define lazy-loaded components if needed
const JobDetailPage = lazy(() => import("../pages/JobDetailPage/JobDetailPage"));
const UserDetailPage = lazy(() => import("../pages/UserDetailPage/UserDetailPage"));

const useRoutesCustom = () => {
  return useRoutes([
    {
      path: "/",
      element: <UserTemplate />, // User layout
      children: [
        { index: true, element: <IndexPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "user-details", element: <Suspense fallback={<div>Loading...</div>}><UserDetailPage /></Suspense> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />, // Admin layout
      children: [
        { path: "job-management", element: <JobManagePage /> },
        { path: "job-type-management", element: <JobTypeManagePage /> },
        { path: "service-management", element: <ServiceManagePage /> },
        { path: "user-management", element: <UserManagePage /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
    { path: "*", element: <PageNotFound /> }, // Catch-all route for unknown paths
  ]);
};

export default useRoutesCustom;
