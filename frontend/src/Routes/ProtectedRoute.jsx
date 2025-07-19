// // src/Routes/ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';
// import useAuthStore from '../store/useAuthstore';

// const ProtectedRoute = ({ children,role }) => {
//   const token = useAuthStore((s) => s.token) || localStorage.getItem('token');

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }
//   if(token && role!==token){
//     return <Navigate to="/login" replace />;
//   }

//   // Only render the children if token exists
//   return children;
// };

// export default ProtectedRoute;
// src/Routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthstore';

const ProtectedRoute = ({ children, role }) => {
  const token = useAuthStore((s) => s.token) || localStorage.getItem('token');

  // If no token exists, redirect to login
  if (!token) {
    return <Navigate to="/LoginPage" replace />;
  }

  // If token exists but doesn't match required role
  if (role && token !== role) {
    return <Navigate to="/LoginPage" replace />;
  }

  // Only allow access if coming from proper auth flow
  const fromAuthFlow = sessionStorage.getItem('fromAuthFlow') === 'true';
  if (!fromAuthFlow) {
    return <Navigate to="/LoginPage" replace />;
  }

  return children;
};

export default ProtectedRoute;