import React, { useState } from 'react';

export default function Metrics() {
  const [active, setActive] = useState(null);

  const stats = [
    {
      value: "10x",
      label: "Faster Screening",
      desc: "AI parses 250+ apps/day vs 25",
      percent: 100,
      color: "#3B82F6" // Light Primary
    },
    {
      value: "70%",
      label: "Time-to-Hire Cut",
      desc: "42 days → 12 days",
      percent: 85,
      color: "#B197FC" // Accent 3
    },
    {
      value: "25x",
      label: "Interview Capacity",
      desc: "200+ auto-interviews daily",
      percent: 75,
      color: "#A5D8FF" // Accent 1
    },
    {
      value: "95%",
      label: "Completion Rate",
      desc: "Smart forms reduce drop-off",
      percent: 65,
      color: "#D0BCFF" // Accent 2
    },
    {
      value: "89%",
      label: "Qualified Candidates",
      desc: "Better pipelines via AI",
      percent: 55,
      color: "#3B82F6", // Recycle Primary with opacity/shade
      opacity: 0.7
    },
    {
      value: "80%",
      label: "Lower Costs",
      desc: "Vs agencies & software subs",
      percent: 45,
      color: "#737373" // Dark Secondary
    },
    {
      value: "50%",
      label: "Fewer Bad Hires",
      desc: "AI skills assessment matching",
      percent: 35,
      color: "#404040" // Dark Secondary BG
    }
  ];

  return (
    <section id="metrics" className="bg-[#EFF6FF] py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          className="text-3xl md:text-5xl font-bold text-center text-[#000000] mb-20 animate-fade-in-up"
          style={{ animationDelay: '0s' }}
        >
          The RecruiterAI Advantage
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left: Interactive Legend */}
          <div className="w-full lg:w-1/2 space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 border animate-fade-in-up ${active === index ? 'bg-white shadow-lg scale-[1.02] border-transparent' : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md'
                  }`}
                style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: stat.color,
                      opacity: stat.opacity || 1,
                      transform: active === index ? 'scale(1.5)' : 'scale(1)'
                    }}
                  ></div>
                  <div>
                    <h3 className="font-bold text-[#404040] text-lg">{stat.label}</h3>
                    <p className="text-sm text-[#737373]">{stat.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className="block text-2xl font-bold transition-colors duration-300"
                    style={{ color: active === index ? stat.color : '#404040' }}
                  >
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Radial Chart */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
              {/* Central Stats Display (Visible when hovering) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className={`text-center transition-opacity duration-300 ${active !== null ? 'opacity-100' : 'opacity-0'}`}>
                  <h4 className="text-5xl font-bold text-[#000000] mb-2">
                    {active !== null ? stats[active].value : ''}
                  </h4>
                  <p className="text-[#737373] font-medium">
                    {active !== null ? stats[active].label : ''}
                  </p>
                </div>
                {/* Default Center Text */}
                <div className={`absolute text-center transition-opacity duration-300 ${active === null ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-6xl">🚀</span>
                </div>
              </div>

              <svg viewBox="0 0 500 500" className="w-full h-full transform -rotate-90">
                {stats.map((stat, index) => {
                  const radius = 220 - (index * 25); // Decreasing radius for concentric rings
                  const circumference = 2 * Math.PI * radius;
                  const dashOffset = circumference - (stat.percent / 100) * circumference;

                  return (
                    <g key={index}>
                      {/* Track */}
                      <circle
                        cx="250"
                        cy="250"
                        r={radius}
                        fill="none"
                        stroke="#F3F4F6"
                        strokeWidth="16"
                        className="transition-all duration-300"
                        style={{ opacity: active !== null && active !== index ? 0.3 : 1 }}
                      />
                      {/* Progress Bar */}
                      <circle
                        cx="250"
                        cy="250"
                        r={radius}
                        fill="none"
                        stroke={stat.color}
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        strokeOpacity={stat.opacity || 1}
                        className={`transition-all duration-700 ease-out`}
                        style={{
                          opacity: active !== null && active !== index ? 0.2 : 1,
                          display: 'block'
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
