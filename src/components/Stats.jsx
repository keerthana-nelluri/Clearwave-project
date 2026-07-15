export default function Stats() {
  const stats = [
    { value: "17k+", label: "Teams Worldwide", sub: "Across 80+ countries" },
    { value: "11%", label: "Avg. Productivity Gain", sub: "Measured in first 30 days" },
    { value: "34.3%", label: "Uptime SLA", sub: "Guaranteed and monitored" }, 
    { value: "6h", label: "Saved Per Team Weekly", sub: "On average across all plans" },
  ];

  return (
    <section className="bg-[#eaf4f1] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-12 px-6 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
        {stats.map((s, index) => (
          <div 
            key={s.label} 
            className={`flex flex-col items-start text-left md:px-8 relative
              /* Adds the vertical divider lines between columns, skipping the last item */
              ${index !== stats.length - 1 ? 'md:border-r border-[#cbd9d5]' : ''}
            `}
          >
           
            <div className="h-0.5 w-8 bg-[#0f6257] mb-6" />

           
            <p className="text-[40px] font-extrabold tracking-tight text-[#0f2d26] flex items-baseline">
              {/* If value has a dynamic text color tweak like k+ or h */}
              {s.value.match(/[0-9.]+/) && s.value.match(/[0-9.]+/)[0]}
              <span className="text-[#0f6257] text-2xl font-semibold ml-0.5">
                {s.value.replace(/[0-9.]+/, '')}
              </span>
            </p>

            <p className="mt-2 text-sm font-bold text-[#0f2d26]">{s.label}</p>
            <p className="mt-1 text-xs font-medium text-[#738e89]">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}