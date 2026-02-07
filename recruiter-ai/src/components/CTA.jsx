export default function CTA() {
  return (
    <section className="relative pt-24 pb-0 bg-[#FFFFFF] overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">

        {/* Floating CTA Card */}
        <div className="bg-[#3B82F6] rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-white">

          {/* Background Wave at Edge */}
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-20">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
              <path d="M50 0 L100 0 L100 100 L50 100 Q 0 50 50 0" fill="#A5D8FF" />
            </svg>
          </div>

          {/* Content centered */}
          <div className="relative z-10 w-full text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Hire Better, Faster?
            </h2>
            <p className="text-blue-100 mb-10 text-xl">
              Join 500+ companies hiring smarter with AI
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#3B82F6] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors transform hover:-translate-y-1">
                Schedule Demo
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Creative Footer Section */}
      <footer className="bg-[#000000] text-white pt-20 pb-10 relative overflow-hidden">

        {/* Creative Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A5D8FF] via-[#D0BCFF] to-[#B197FC]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="font-bold text-2xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">RecruiterAI</h4>
              <p className="text-[#737373] text-sm leading-relaxed">
                Automating the future of hiring, one candidate at a time. Join the revolution today.
              </p>
              <div className="flex gap-4 mt-6">
                {/* Twitter (X) */}
                <div className="w-10 h-10 bg-[#404040] rounded-lg flex items-center justify-center text-white hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                </div>
                {/* LinkedIn */}
                <div className="w-10 h-10 bg-[#404040] rounded-lg flex items-center justify-center text-white hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.98 0 1.775-.773 1.775-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
                </div>
                {/* Instagram */}
                <div className="w-10 h-10 bg-[#404040] rounded-lg flex items-center justify-center text-white hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </div>
                {/* Gmail */}
                <div className="w-10 h-10 bg-[#404040] rounded-lg flex items-center justify-center text-white hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.356 1.517-2.097 2.56-1.24L12 11.25l9.44-7.033c1.043-.857 2.56-.116 2.56 1.24z" /></svg>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-white mb-6">Company</h5>
              <ul className="space-y-3 text-[#737373] text-sm">
                {['About Us', 'Services', 'Community', 'Testimonials'].map(item => (
                  <li key={item} className="hover:text-[#A5D8FF] transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-sm bg-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-6">Support</h5>
              <ul className="space-y-3 text-[#737373] text-sm">
                {['Help Center', 'Tweet @ Us', 'Webinars', 'Feedback'].map(item => (
                  <li key={item} className="hover:text-[#D0BCFF] transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-sm bg-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-6">Contact Us</h5>
              <ul className="space-y-4 text-[#737373] text-sm">
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-[#404040] flex items-center justify-center text-[#3B82F6]">📞</span>
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-[#404040] flex items-center justify-center text-[#3B82F6]">✉️</span>
                  support@recruiterai.com
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#404040] flex flex-col md:flex-row justify-between items-center text-xs text-[#737373]">
            <p>© 2024 RecruiterAI. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
              <span className="hover:text-white cursor-pointer transition-colors">Legal</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
