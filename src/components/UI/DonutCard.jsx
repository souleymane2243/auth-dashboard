function DonutCard({ label, value, subtitle, segments }) {
  
  let cumulative = 0;
  const gradientParts = segments.map((seg) => {
    const start = cumulative;
    cumulative += seg.percent;
    return `${seg.color} ${start}% ${cumulative}%`;
  });
  const gradient = `conic-gradient(${gradientParts.join(", ")})`;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <span className="text-zinc-800 text-sm font-semibold">{label}</span>
      </div>
      <div className="text-2xl font-bold mb-4">{value}</div>

      <div className="flex items-center gap-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: gradient }}
        >
          <div className="w-12 h-12 bg-white rounded-full" />
        </div>

        <div className="flex flex-col gap-1">
          {segments.map((seg) => (
            <div key={seg.name} className="flex items-center gap-2 text-xs text-zinc-500">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: seg.color }}
              />
              {seg.percent}% {seg.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonutCard;