import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "@/pages/login"
import DashboardLayout from "@/pages/dashboard/layout"
import DashboardPage from "@/pages/dashboard/dashboard"
import UsersPage from "@/pages/dashboard/users/users"
import RolesPage from "@/pages/dashboard/roles/roles"
import PermissionsPage from "@/pages/dashboard/permissions/permissions"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="permissions" element={<PermissionsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
