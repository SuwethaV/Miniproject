// src/Routes/App.routes.js
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import NewUserPrompt from '../pages/login/NewUserPrompt';
import CreateAccount from '../pages/login/Register';
import ProtectedRoute from './ProtectedRoute';


const HomePage = () => (
  <div className="text-center mt-20 text-3xl text-[#a30bfb]">Welcome to Home Page</div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/NewUserPrompt" element={<NewUserPrompt />} />
      <Route path="/Register" element={<CreateAccount />} />
     
    </Routes>
  );
};

export default AppRoutes;
