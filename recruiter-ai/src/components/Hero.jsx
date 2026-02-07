export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-48"
      style={{
        background: `linear-gradient(120deg, #EFF6FF 0%, #A5D8FF 30%, #D0BCFF 70%, #B197FC 100%)`
      }}
    >
      {/* Refined Wavy Lines (Wireframe Effect) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 800" className="absolute top-0 left-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M -200 ${200 + i * 40} Q 360 ${100 + i * 20} 720 ${400 + i * 10} T 1640 ${300 + i * 30}`}
              stroke="url(#wave-grad)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: '4s' }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M ${100 + i * 150} -100 Q ${300 + i * 50} 400 ${200 + i * 100} 900`}
              stroke="url(#wave-grad)"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
          ))}
        </svg>

        {/* Soft Background Blobs (Filtered) */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Left Visuals - 2 Cards (Desktop Only) */}
        <div className="hidden lg:flex flex-col gap-8 w-[25%] pt-12 animate-fade-in-up" style={{ animationDelay: '0s' }}>
          {/* Card 1: Sarah K */}
          <div className="transform hover:scale-105 transition-transform duration-500">
            <ConversationCard
              text="Candidates wait 3 weeks for replies while I’m juggling everything. We’re losing great talent to competitors."
              author="Sarah K., Founder at TechStart"
              delay="0s"
            />
          </div>

          {/* Card 2: Priya S */}
          <div className="transform hover:scale-105 transition-transform duration-500 ml-8">
            <ConversationCard
              text="I’m the CEO, product lead, AND now doing HR? There’s zero time to read 200 resumes properly."
              author="Priya S., CEO at InnovateLabs"
              delay="1s"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="w-full lg:w-[45%] text-center order-first lg:order-none z-10">
          {/* AI-Powered Hiring Badge */}
          <div className="mb-8 inline-flex justify-center w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full
                         bg-white/80 backdrop-blur-sm text-blue-600 text-sm font-medium shadow-sm border border-blue-100"
            >
              {/* Blinking Blue Dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>

              AI-Powered Hiring
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#000000] mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Every Hire, <br className="hidden lg:block" />
            <span className="text-[#3B82F6]">Faster</span> and Better
          </h1>

          <p
            className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up font-medium"
            style={{ animationDelay: '0.4s' }}
          >
            Stop losing great candidates to slow, manual hiring processes.
            Let AI handle the heavy lifting while you focus on building your team.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <button
              className="px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition hover:translate-y-[-2px] hover:shadow-2xl bg-[#3B82F6]"
            >
              Start Hiring Smarter
            </button>
            <button
              className="px-8 py-4 rounded-xl font-bold text-lg border-2 transition hover:bg-white/50 border-[#3B82F6] text-[#3B82F6]"
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Right Visuals - 2 Cards (Desktop Only) */}
        <div className="hidden lg:flex flex-col gap-8 w-[25%] pt-12 relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>

          {/* Card 3: Rahul M */}
          <div className="transform hover:scale-105 transition-transform duration-500 mr-8">
            <ConversationCard
              text="Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months."
              author="Rahul M., Hiring Manager"
              delay="2s"
            />
          </div>

          {/* Card 4: Amit T */}
          <div className="transform hover:scale-105 transition-transform duration-500">
            <ConversationCard
              text="Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."
              author="Amit T., Head of HR at ScaleUp"
              delay="3s"
            />
          </div>
        </div>

        {/* Mobile/Tablet Visuals (Grid) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <ConversationCard
            text="Candidates wait 3 weeks for replies while I’m juggling everything. We’re losing great talent to competitors."
            author="Sarah K., Founder at TechStart"
            delay="0s"
          />
          <ConversationCard
            text="I’m the CEO, product lead, AND now doing HR? There’s zero time to read 200 resumes properly."
            author="Priya S., CEO at InnovateLabs"
            delay="1s"
          />
          <ConversationCard
            text="Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months."
            author="Rahul M., Hiring Manager"
            delay="2s"
          />
          <ConversationCard
            text="Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."
            author="Amit T., Head of HR at ScaleUp"
            delay="3s"
          />
        </div>

      </div>
    </section>

  );
}

/* Conversation Card Component */
function ConversationCard({ text, author, delay }) {
  return (
    <div
      className="relative bg-white p-6 rounded-2xl shadow-xl border border-blue-50/50 animate-float"
      style={{ animationDelay: delay }}
    >
      <div className="absolute -left-2 top-6 w-1 h-8 bg-blue-400 rounded-full"></div>
      <p className="text-sm font-medium leading-relaxed text-gray-700">"{text}"</p>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
          {author.charAt(0)}
        </div>
        <p className="text-xs font-semibold text-gray-500">{author}</p>
      </div>
    </div>
  );
}
