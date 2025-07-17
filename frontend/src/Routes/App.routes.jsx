// src/Routes/App.routes.js
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/login/LoginPage'
import NewUserPrompt from '../pages/login/NewUserPrompt'
import CreateAccount from '../pages/login/Register'
import ProtectedRoute from './ProtectedRoute'


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
        <ProtectedRoute>
          <NewUserPrompt />
        </ProtectedRoute>
      }
    />
    <Route
      path="/Register"
      element={
        <ProtectedRoute>
          <CreateAccount />
        </ProtectedRoute>
      }
    />

    {/* Fallback for any invalid route */}
    <Route path="*" element={<Navigate to="/LoginPage" replace />} />
  </Routes>
)

export default AppRoutes
