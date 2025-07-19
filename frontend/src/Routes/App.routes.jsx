// // src/Routes/App.routes.js
// import { Routes, Route, Navigate } from 'react-router-dom'
// import LoginPage from '../pages/login/LoginPage'
// import NewUserPrompt from '../pages/login/NewUserPrompt'
// import CreateAccount from '../pages/login/Register'
// import ProtectedRoute from './ProtectedRoute'
// import Home from '../pages/home/Home'


// const AppRoutes = () => (
//   <Routes>
//     {/* Public routes */}
//     <Route path="/LoginPage" element={<LoginPage />} />
//     {/* Equal alias for convenience */}
//     <Route path="/" element={<Navigate to="/LoginPage" replace />} />

//     {/* Protected routes */}
//     <Route
//       path="/NewUserPrompt"
//       element={
//         <ProtectedRoute role="register">

//           <NewUserPrompt />
//         </ProtectedRoute>
//       }
//     />
//     <Route
//       path="/Register"
//       element={
//         <ProtectedRoute role="register">

//           <CreateAccount />
//         </ProtectedRoute>
//       }
//     />
//     <Route
//       path="/home"
//       element={
//         <ProtectedRoute>

//           <Home />
//         </ProtectedRoute>
//       }
//     />

//     {/* Fallback for any invalid route */}
//     <Route path="*" element={<Navigate to="/LoginPage" replace />} />
//   </Routes>
// )

// export default AppRoutes
// src/Routes/App.routes.js
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import NewUserPrompt from '../pages/login/NewUserPrompt';
import CreateAccount from '../pages/login/Register';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/home/Home';

const AppRoutes = () => (
  <Routes>
    {/* Only public route */}
    <Route path="/LoginPage" element={<LoginPage />} />
    
    {/* Default route */}
    <Route path="/" element={<Navigate to="/LoginPage" replace />} />

    {/* All other routes are protected */}
    <Route path="*" element={
      <ProtectedRoute>
        <Routes>
          <Route path="/NewUserPrompt" element={<NewUserPrompt />} />
          <Route path="/Register" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/LoginPage" replace />} />
        </Routes>
      </ProtectedRoute>
    } />
  </Routes>
);

export default AppRoutes;