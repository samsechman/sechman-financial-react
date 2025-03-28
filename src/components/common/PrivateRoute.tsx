import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    // You can show a loading spinner here
    return <div>Loading...</div>;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute; 