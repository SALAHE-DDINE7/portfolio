import { useEffect, useState } from "react";
import { mySocials } from "../constants";
import CopyEmailButton from "../components/CopyEmailButton";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="c-space mt-12 text-neutral-300 relative overflow-hidden">
      {/* decorative top wave */}
      <div className="pointer-events-none -mt-6">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="rgba(17,24,39,0.85)" />
        </svg>
      </div>

      <div className="rounded-xl bg-linear-to-r from-neutral-900/65 via-neutral-800/50 to-neutral-900/45 p-6 md:p-10 border border-neutral-800 relative z-10 overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute -right-20 -top-10 w-72 h-72 bg-linear-to-tr from-primary/30 via-pink-400/10 to-transparent rounded-full filter blur-3xl opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">Salaheddine Bakhatar</span>
            <span className="text-sm text-neutral-400 mt-1">Full‑stack developer • Designer</span>
          </div>

          <nav aria-label="Footer navigation" className="text-sm">
            <ul className="flex flex-wrap gap-3 text-neutral-400 items-center">
              <li>
                <a href="/terms" className="hover:underline transition-colors">Terms</a>
              </li>
              <li className="text-neutral-600">•</li>
              <li>
                <a href="/privacy" className="hover:underline transition-colors">Privacy</a>
              </li>
              <li className="text-neutral-600">•</li>
              <li>
                <a href="/sitemap.xml" className="hover:underline transition-colors">Sitemap</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {mySocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800/30 hover:scale-105 transform transition shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <img src={social.icon} alt={social.name} className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
                <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 text-xs text-neutral-200 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.name}
                </span>
              </a>
            ))}

            <div className="ml-2 bg-linear-to-br from-neutral-800/40 to-neutral-700/30 p-1 rounded-full">
              <CopyEmailButton />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center md:items-center justify-between text-sm text-neutral-400 gap-3">
          <div className="flex items-center gap-3">
            <p className="opacity-90">© {new Date().getFullYear()} Salaheddine Bakhatar</p>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-500">Built with React • Vite</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SALAHE-DDINE7/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:underline transition-colors"
            >
              Source
            </a>

            {showTop && (
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex items-center gap-2 px-3 py-2 bg-linear-to-br from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 rounded-full shadow-md transition transform hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-current text-neutral-200" strokeWidth="2">
                  <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">Top</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
