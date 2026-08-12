
function StatCard({ label, value, change, changeType, icon: Icon }) {
  const isUp = changeType === "up";

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-zinc-800 text-sm font-bold">{label}</span>
        <div className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center">
          <Icon size={16} className="text-zinc-500" />
        </div>
      </div>

      <div className="text-2xl font-bold mb-2">{value}</div>

      <div className={`text-sm flex items-center gap-1 ${isUp ? "text-green-600" : "text-red-500"}`}>
        <span>{isUp ? "↑" : "↓"} {change}</span>
        <span className="text-zinc-400 font-normal">since last month</span>
      </div>
    </div>
  );
}

export default StatCard;