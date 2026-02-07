import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Workflows', href: '#workflows' },
        { name: 'Metrics', href: '#metrics' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'md:py-2' : 'md:py-6'
            }`}>
            <div className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl flex items-center justify-between px-6 py-3 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20'
                : 'bg-transparent'
                }`}>

                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg]">
                        {/* Background Hexagon-like Shape */}
                        <div className="absolute inset-0 bg-[#3B82F6] rounded-xl rotate-45 opacity-20 group-hover:opacity-30 transition-all shadow-lg shadow-blue-100"></div>

                        {/* The SVG Logo Icon */}
                        <svg
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-[#3B82F6] relative z-10 filter drop-shadow-sm"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {/* Magnifying Glass Part */}
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            {/* AI Node/Spark in center */}
                            <circle cx="11" cy="11" r="2" fill="currentColor" />
                            <path d="M11 7a4 4 0 0 1 4 4" />
                        </svg>
                    </div>
                    <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-[#000000]' : 'text-[#000000]'}`}>
                        Recruiter<span className="text-[#3B82F6]">AI</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-[#737373] font-medium hover:text-[#3B82F6] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-[#737373] font-bold hover:text-[#000000] transition-colors">
                        Login
                    </button>
                    <button className="bg-[#3B82F6] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 active:scale-95">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    );
}
