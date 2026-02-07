export default function Logos() {
  const platforms = [
    { name: "LinkedIn", color: "#3B82F6" },   // Light Primary
    { name: "Naukri.com", color: "#737373" }, // Dark Secondary
    { name: "Indeed", color: "#3B82F6" },     // Dark Primary (Same as Light)
    { name: "AngelList", color: "#000000" },  // Dark Primary BG
    { name: "Instahyre", color: "#A5D8FF" },  // Accent 1
    { name: "Wellfound", color: "#D0BCFF" },  // Accent 2
    { name: "IIMJobs", color: "#B197FC" },    // Accent 3
    { name: "Glassdoor", color: "#3B82F6" },  // Light Primary
    { name: "Monster India", color: "#737373" }, // Dark Secondary
    { name: "Cutshort", color: "#000000" },   // Dark Primary BG
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#000000] mb-4">
          Post Once, Reach Everywhere
        </h2>
        <p className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto">
          RecruiterAI automatically syncs your job postings across all major platforms
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll">
          {/* First Set */}
          <div className="flex gap-16 md:gap-24 px-8 md:px-12">
            {platforms.map((p, i) => (
              <LogoItem key={i} name={p.name} color={p.color} />
            ))}
          </div>
          {/* Duplicate Set for Infinite Loop */}
          <div className="flex gap-16 md:gap-24 px-8 md:px-12">
            {platforms.map((p, i) => (
              <LogoItem key={`dup-${i}`} name={p.name} color={p.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ name, color }) {
  return (
    <div
      className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
    >
      <span
        className="text-2xl md:text-3xl font-bold transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
        style={{ color: color }}
      >
        {name}
      </span>
      {/* Optional Underline on Hover */}
      <div
        className="h-1 w-0 bg-current transition-all duration-300 group-hover:w-full mt-1 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
