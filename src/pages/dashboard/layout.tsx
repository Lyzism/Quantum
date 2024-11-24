import { Sidebar } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout