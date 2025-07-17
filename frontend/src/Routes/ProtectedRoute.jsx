// src/Routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthstore';

const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((s) => s.token) || localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Only render the children if token exists
  return children;
};

export default ProtectedRoute;
