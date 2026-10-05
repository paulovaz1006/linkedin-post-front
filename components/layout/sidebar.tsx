import Link from "next/link";
import {
  BarChart3,
  CalendarClock,
  FileText,
  Plus,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    label: "Novo post",
    href: "/posts/new",
    icon: Plus,
  },
  {
    label: "Agendados",
    href: "/posts/scheduled",
    icon: CalendarClock,
  },
  {
    label: "Histórico",
    href: "/posts/history",
    icon: FileText,
  },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
          in
        </div>

        <span className="font-semibold">
          LinkedInPost
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Configurações */}
      <div className="border-t p-4">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
        >
          <Settings size={18} />
          Configurações
        </Link>
      </div>
    </aside>
  );
}