import { Link, useLocation } from "react-router-dom"
import { type LucideIcon, User, Shield, Key, LayoutDashboard } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type NavItem = {
  title: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: User,
  },
  {
    title: "Roles",
    href: "/dashboard/roles",
    icon: Shield,
  },
  {
    title: "Permissions",
    href: "/dashboard/permissions",
    icon: Key,
  },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex h-14 items-center border-b px-4">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-start",
              location.pathname === item.href && "bg-gray-200 dark:bg-gray-700"
            )}
          >
            <Link to={item.href}>
              <item.icon className="mr-2 h-5 w-5" />
              {item.title}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}
