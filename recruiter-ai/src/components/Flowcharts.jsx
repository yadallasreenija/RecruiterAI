import React, { useEffect, useRef, useState } from 'react';

export default function Flowcharts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflows" ref={sectionRef} className="py-24 bg-[#EFF6FF] relative overflow-hidden">
      {/* Background Design: Subtle Grid + Soft Glows */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white opacity-40 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full bg-[#D0BCFF]/30 text-[#000000] text-xs font-bold tracking-widest uppercase mb-6">
            Visual Automation
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] mb-8 tracking-tight lg:leading-[1.1]">
            AI Recruiting Software That <br /> Works Like Your Own HR Team
          </h2>
          <p className="text-xl text-[#404040] max-w-2xl mx-auto font-medium leading-relaxed">
            Build custom hiring workflows in minutes. <span className="text-[#3B82F6]">No coding required.</span>
          </p>
        </div>

        {/* Flowcharts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Flowchart 1: Automated Screening */}
          <FlowchartCard
            title="Screening & Scheduling"
            tag="Automated"
            accent="#3B82F6"
            benefit="Screen 250+ apps in minutes"
            isVisible={isVisible}
            delay={0}
            steps={[
              { type: 'action', text: 'New Application', icon: '📄' },
              { type: 'action', text: 'AI Resume Screening', icon: '🤖' },
              { type: 'decision', text: 'Score > 75%?', yes: 'Auto-Schedule Interview', no: 'Add to Talent Pool' },
              { type: 'action', text: 'Send 24h Reminder', icon: '📅' }
            ]}
          />

          {/* Flowchart 2: Multi-Stage Interview */}
          <FlowchartCard
            title="Multi-Stage Interview"
            tag="Intelligence"
            accent="#3B82F6"
            benefit="Hire in 12 days (vs 42)"
            isVisible={isVisible}
            delay={0.2}
            steps={[
              { type: 'action', text: 'Invite Accepted', icon: '✅' },
              { type: 'action', text: 'AI Video Interview', icon: '🎥' },
              { type: 'decision', text: 'Score > 80%?', yes: 'Manager Round', no: 'Auto-Reject' },
              { type: 'action', text: 'Send Offer Letter', icon: '✍️', isFinal: true }
            ]}
          />

          {/* Flowchart 3: Passive Re-engagement */}
          <FlowchartCard
            title="Passive Re-engagement"
            tag="Nurturing"
            accent="#3B82F6"
            benefit="Talent pipeline on autopilot"
            isVisible={isVisible}
            delay={0.4}
            steps={[
              { type: 'action', text: 'Silver Medalist', icon: '📁' },
              { type: 'action', text: 'Wait 3 Months', icon: '⏳' },
              { type: 'decision', text: 'New Role Opens?', yes: 'AI Email Outreach', no: 'Check Next Qtr' },
              { type: 'action', text: 'Fast-Track Interview', icon: '🚀' }
            ]}
          />

        </div>
      </div>
    </section>
  );
}

function FlowchartCard({ title, tag, accent, benefit, steps, isVisible, delay }) {
  return (
    <div
      className={`flex flex-col bg-[#D0BCFF] rounded-[2rem] shadow-2xl transition-all duration-1000 h-full overflow-hidden border border-[#B197FC]/30 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Mini Header */}
      <div className="bg-white/20 backdrop-blur-md px-8 py-5 border-b border-white/20 flex items-center justify-between">
        <span className="text-[10px] font-black text-[#000000] uppercase tracking-widest">{tag}</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#000000]/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#000000]/20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 flex-grow flex flex-col items-center">
        <h3 className="text-xl font-bold text-[#000000] mb-10 text-center">{title}</h3>

        <div className="flex-grow w-full flex flex-col items-center">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {step.type === 'action' ? (
                <div
                  className={`
                    w-full max-w-[240px] py-4 px-6 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all duration-300 relative z-10
                    ${step.isFinal
                      ? 'bg-[#000000] text-white shadow-xl shadow-black/20 scale-105'
                      : 'bg-white/90 backdrop-blur-sm shadow-lg text-[#000000] hover:bg-white hover:scale-[1.03]'
                    }
                    `}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span>{step.text}</span>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center py-2">
                  {/* Unique Light Rhombus */}
                  <div className="relative w-48 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-dashed rounded-3xl border-[#000000]/20"></div>
                    <div className="relative z-10 text-center">
                      <span className="text-xs font-black text-[#000000]/40 uppercase tracking-tighter block mb-0.5">Decision Point</span>
                      <span className="text-sm font-bold text-[#000000]">{step.text}</span>
                    </div>
                  </div>

                  {/* Branches */}
                  <div className="w-full grid grid-cols-2 gap-4 mt-6 mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black text-[#000000]/50 mb-2">YES</span>
                      <div className="w-full h-12 bg-white/40 border border-white/20 rounded-xl flex items-center justify-center text-[11px] font-bold text-[#000000] px-3 text-center leading-tight shadow-sm hover:bg-white/60 transition-colors">
                        {step.yes}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black text-[#000000]/50 mb-2">NO</span>
                      <div className="w-full h-12 bg-white/20 border border-white/10 rounded-xl flex items-center justify-center text-[11px] font-bold text-[#000000]/60 px-3 text-center leading-tight shadow-sm hover:bg-white/30 transition-colors">
                        {step.no}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Connection Line */}
              {idx < steps.length - 1 && (
                <div className="h-10 w-[2px] bg-[#000000]/10 relative my-2">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#000000]/20 shadow-sm"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer Benefit */}
      <div className="p-8 pt-0">
        <div className="bg-white/30 rounded-2xl p-4 border border-white/20 group-hover:bg-white/40 transition-colors">
          <p className="text-[13px] font-bold text-[#000000] text-center leading-snug">
            {benefit}
          </p>
        </div>
      </div>
    </div>
  );
}
