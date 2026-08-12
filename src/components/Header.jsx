 import { Sun, Moon } from "lucide-react";

function Header({ isDarkMode, onToggleTheme }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h1 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          Analytics
        </h1>

        <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-4 py-2 text-sm text-zinc-600">
          <span>01.08.2022 - 31.08.2022</span>
          <span>📅</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
             <button
                      onClick={onToggleTheme}
                    className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-3 py-1.5"
                    >
                    <Sun size={14} className="text-zinc-400" />
                   <div className="w-8 h-4 bg-blue-500 rounded-full relative">
              <div
                 className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${
                        isDarkMode ? "left-4" : "left-0.5"
                   }`}
              />
            </div>
             <Moon size={14} className="text-zinc-400" />
             </button>

        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Kristi Kamlykova"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-sm font-medium">Kristi Kamlykova</span>
        </div>
      </div>
    </div>
  );
}

export default Header;