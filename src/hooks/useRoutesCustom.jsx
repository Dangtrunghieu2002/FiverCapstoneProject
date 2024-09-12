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
import JobDetailPage from "../pages/JobDetailPage/JobDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import UserDetailPage from "../pages/UserDetailPage/UserDetailPage";
import { getLocalStorage } from "../utils/util";
import ContentDetail from "../components/UserDetailComponent/ContentDetail";
import UpdateDetail from "../components/UserDetailComponent/UpdateDetail";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import ListJobType from "../pages/ListJobType/ListJobType";
import { path } from "../common/path";
// Define lazy-loaded components if needed


const useRoutesCustom = () => {
  return useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          index: true,
          element: <IndexPage />,
        },
        {
          path: path.listJob,
          element: <ListJobPage />,
        },
        {
          path: path.jobType,
          element: <ListJobType />,
        },
        {
          path: path.jobDetail,
          element: <JobDetailPage />,
        },
        {
          path: path.userDetail,
          element: getLocalStorage("user") ? (
            <UserDetailPage />
          ) : (
            <PageNotFound />
          ),
          children: [
            {
              index: true,
              element: <ContentDetail />,
            },
            {
              path: path.updateDetail,
              element: <UpdateDetail />,
            },
          ],
        },
        { path: "*", element: <PageNotFound /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />, // Admin layout
      children: [
        {
          index: true, // This makes UserManagePage the default when entering "/admin"
          path: "user-management", element: <UserManagePage />,
        },
        { path: "job-management", element: <JobManagePage /> },
        { path: "job-type-management", element: <JobTypeManagePage /> },
        { path: "service-management", element: <ServiceManagePage /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
    {
      path: path.signIn,
      element: <LoginPage />,
    },
    {
      path: path.signUp,
      element: <SignUpPage />,
    }, // Catch-all route for unknown paths
  ]);
};

export default useRoutesCustom;
