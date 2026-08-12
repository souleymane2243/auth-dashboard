
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/UI/StatCard";
import DonutCard from "./components/UI/DonutCard";
import { stats, usersData, subscriptionsData } from "./assets/data";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "bg-zinc-900" : "bg-zinc-50"}`}>
      <Sidebar />
      <main className="flex-1 p-8">
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />

        <div className="grid grid-cols-4 gap-4 max-w-4xl">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
                icon={stat.icon}
              />
            ))}
          </div>

          <DonutCard {...usersData} />
          <DonutCard {...subscriptionsData} />
        </div>
      </main>
    </div>
  );
}

export default App;