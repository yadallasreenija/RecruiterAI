import React, { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
      name: "Rahul Mehta",
      role: "Founder",
      company: "TechStart Solutions",
      color: "#A5D8FF", // Accent 1
      delay: "0s"
    },
    {
      quote: "We used to drown in resumes. Now, we only talk to the top 10% of candidates. The automated scheduling alone saves our HR team 20 hours a week.",
      name: "Sarah Jenkins",
      role: "Head of Talent",
      company: "ScaleFast",
      color: "#D0BCFF", // Accent 2
      delay: "0.2s"
    },
    {
      quote: "I was skeptical about AI interviewing, but the candidate quality has skyrocketed. It feels like having an extra recruiter working 24/7 for us.",
      name: "David Chen",
      role: "CTO",
      company: "Innovate Inc",
      color: "#B197FC", // Accent 3
      delay: "0.4s"
    }
  ];

  return (
    <section id="testimonials" className="relative bg-[#A5D8FF] bg-gradient-to-br from-[#A5D8FF] via-[#B1E1FF] to-[#D0BCFF]/30 py-24 overflow-hidden">
      {/* Enhanced Glitter Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-60 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
        {/* Larger "Glints" */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`glint-${i}`}
            className="absolute w-1 h-1 bg-white rotate-45 animate-twinkle opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: `${Math.random() * 2 + 1}`,
              animationDelay: `${Math.random() * 10}s`,
              boxShadow: '0 0 15px white'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#000000] mb-20 drop-shadow-sm">
          Loved by <span className="text-[#6741D9] border-b-4 border-[#D0BCFF]">Hiring Teams</span>
        </h2>

        <div
          ref={sectionRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-3xl shadow-2xl border-2 hover:scale-105 transition-all duration-500 flex flex-col justify-between h-full bg-white/60 backdrop-blur-xl border-white/40 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{
                borderColor: i === 1 ? '#D0BCFF' : 'rgba(255,255,255,0.4)', // Highlight center card with Accent #2
                animationDelay: isVisible ? t.delay : '0s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D0BCFF] rounded-full flex items-center justify-center opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />

              <div className="mb-6 flex-grow">
                {/* Typewriter Container */}
                <div className="typewriter-container" style={{ animationDelay: isVisible ? `${parseFloat(t.delay) + 0.5}s` : '0s' }}>
                  <p className="font-handwriting text-[#000000] text-2xl leading-relaxed relative z-10">
                    {isVisible && <TypewriterText text={`"${t.quote}"`} delay={parseFloat(t.delay)} />}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[#000000]/5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#A5D8FF] to-[#D0BCFF] flex items-center justify-center font-bold text-2xl text-white shadow-lg border-2 border-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#000000] text-lg">{t.name}</h4>
                  <p className="text-sm text-[#404040] font-medium">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TypewriterText({ text, delay }) {
  const words = text.split(" ");

  return (
    <span className="block">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in-word"
          style={{
            animation: `fadeIn 0.1s forwards`,
            animationDelay: `${delay + (i * 0.1)}s`,
            marginRight: '0.25em'
          }}
        >
          {word}
        </span>
      ))}
      <span
        className="inline-block w-[2px] h-[1em] bg-black animate-blink align-middle ml-1"
        style={{
          animation: `blink 1s infinite`,
          animationDelay: `${delay}s`
        }}
      ></span>
    </span>
  );
}


