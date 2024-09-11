import React, { useEffect } from 'react';
import UserHeader from '../../components/UserHeader/UserHeader';
import UserFooter from '../../components/UserFooter/UserFooter';
import { Outlet } from 'react-router-dom'; // Outlet to render nested routes
import { useDispatch } from 'react-redux';
import { getValueJobApi } from '../../redux/congViecSlice';

const UserTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValueJobApi());
  }, [dispatch]); // Fetch job data on mount

  return (
    <div>
      <UserHeader />
      <main>
        <Outlet /> {/* Renders nested routes here */}
      </main>
      <UserFooter />
    </div>
  );
};

export default UserTemplate;
