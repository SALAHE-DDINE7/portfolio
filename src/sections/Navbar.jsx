import { useState } from "react";
import { motion } from "motion/react";
/* eslint-disable react/prop-types */
function Navigation({ onLinkClick } = {}) {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Projects" },
    { id: "work", label: "Experiences" },
  ];

  return (
    <ul className="nav-ul flex items-center gap-1">
      {items.map((it) => (
        <li key={it.id} className="nav-li">
          <a
            href={`#${it.id}`}
            onClick={onLinkClick}
            className="nav-link group relative px-3 py-2 rounded-md"
          >
            <span className="relative z-10">{it.label}</span>
            <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-linear-to-r from-orange-400 to-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 z-30 w-full backdrop-blur-md bg-black/30 border-b border-neutral-800">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="text-xl font-bold text-white">
            <span className="text-orange-400">SCODE</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-200 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle" />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <nav className="bg-neutral-900/90 rounded-xl p-6 mx-6 w-[90%] max-w-sm">
            <Navigation onLinkClick={() => setIsOpen(false)} />
            <div className="mt-6 flex justify-center">
              <a href="#about" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-medium">
                Contact
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
