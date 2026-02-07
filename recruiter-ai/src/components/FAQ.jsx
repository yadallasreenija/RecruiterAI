import { useState, useEffect, useRef } from "react";

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

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
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const isOpen = openIndex === index;

  return (
    <div
      ref={itemRef}
      className={`group bg-white rounded-2xl transition-all duration-700 border-2 overflow-hidden transform
        ${isVisible ? "translate-x-0 opacity-100" : (index % 2 === 0 ? "-translate-x-20" : "translate-x-20") + " opacity-0"}
        ${isOpen
          ? 'border-[#3B82F6] shadow-xl scale-[1.02]'
          : 'border-transparent shadow-md hover:border-[#A5D8FF]'
        }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#3B82F6]' : 'text-[#000000]'}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
          ${isOpen ? 'bg-[#3B82F6] text-white rotate-180' : 'bg-[#F3F4F6] text-[#737373] group-hover:bg-[#EFF6FF]'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 text-[#737373] leading-relaxed">
          {item.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does AI screening work?",
      a: "Our AI analyzes resumes against your job descriptions in real-time, ranking candidates based on skills, experience, and potential fit. It eliminates bias and ensures you only spend time on the top 10% of applicants."
    },
    {
      q: "Does RecruiterAI integrate with our existing ATS?",
      a: "Yes! We seamlessly integrate with all major ATS platforms including Greenhouse, Lever, Workday, and BambooHR. Syncing your data takes just a few clicks."
    },
    {
      q: "What's the pricing structure?",
      a: "We offer flexible plans starting with a Pay-As-You-Go model for startups, scaling up to Enterprise plans with unlimited seats and custom integrations. Contact sales for a tailored quote."
    },
    {
      q: "How long does setup take?",
      a: "Most teams are up and running in under 30 minutes. Our onboarding wizard guides you through connecting your email and ATS, and you can start your first AI-workflow immediately."
    },
    {
      q: "Is candidate data secure?",
      a: "Absolutely. We are SOC 2 Type II compliant and GDPR ready. All candidate data is encrypted at rest and in transit, ensuring enterprise-grade security for your organization."
    }
  ];

  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-[#EFF6FF]">

      {/* Creative Background Design */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3B82F6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#A5D8FF] opacity-40 blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#D0BCFF] opacity-40 blur-[140px]"></div>
        <div className="absolute top-[50%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#B197FC] opacity-30 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase">
            Quick Answers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#737373] font-medium">
            Everything you need to know about the future of hiring.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              item={item}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] h-24 text-[#D0BCFF]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
