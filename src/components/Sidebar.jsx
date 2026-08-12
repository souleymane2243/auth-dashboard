
import { LayoutGrid, Package, Mail, Users, Settings, LogOut } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen p-6 flex flex-col justify-between border-r border-zinc-200">
      <div>
        <div className="flex items-center gap-2 mb-8">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path
      d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
      fill="url(#logoGradient)"
    />
  </svg>
  <span className="text-xl font-bold">Business</span>
</div>

        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
            <LayoutGrid size={18} />
            Analytics
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50">
            <Package size={18} />
            Products
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50">
            <Mail size={18} />
            Messages
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50">
            <Users size={18} />
            Customers
          </a>
        </nav>
      </div>

      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4">
        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50">
          <Settings size={18} />
          Settings
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50">
          <LogOut size={18} />
          Sign Out
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;