// src/Routes/App.routes.js
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/login/LoginPage'
import NewUserPrompt from '../pages/login/NewUserPrompt'
import CreateAccount from '../pages/login/Register'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/home/Home'


const AppRoutes = () => (
  <Routes>
    {/* Public routes */}
    <Route path="/LoginPage" element={<LoginPage />} />
    {/* Equal alias for convenience */}
    <Route path="/" element={<Navigate to="/LoginPage" replace />} />

    {/* Protected routes */}
    <Route
      path="/NewUserPrompt"
      element={
          <NewUserPrompt />
      }
    />
    <Route
      path="/Register"
      element={
          <CreateAccount />
      }
    />
    <Route
      path="/home"
      element={
        <ProtectedRoute>

          <Home />
        </ProtectedRoute>
      }
    />

    {/* Fallback for any invalid route */}
    <Route path="*" element={<Navigate to="/LoginPage" replace />} />
  </Routes>
)

export default AppRoutes
