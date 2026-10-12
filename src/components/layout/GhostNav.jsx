import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Meet The Team', path: '/meet-the-team' },
    ],
  },
  { label: 'Events', path: '/events' },
  { label: 'Training', path: '/training' },
  { label: 'Resources', path: '/resources' },
];


export default function GhostNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-md shadow-sm border-b border-sanctuary/10' : 'bg-transparent'}`
        }>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link to="/" className="relative z-50 flex items-center gap-3 text-[hsl(var(--primary-foreground))]">
            <img
              src="https://media.base44.com/images/public/69f91c5d31dad328146ca459/a83f694ef_multiplycollective.jpg"
              alt="Multiply Collective Logo"
              className="h-9 w-9 rounded-sm object-cover"
            />
            <span className="font-body font-semibold tracking-wide">Multiply Collective</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-base font-body tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === link.path || (link.children && link.children.some((c) => c.path === location.pathname))
                      ? 'text-blue-light'
                      : 'text-sanctuary hover:text-blue-light'
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3 mt-0.5" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {link.children && (
                  <div className="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-obsidian border border-sanctuary/15 min-w-48 py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-6 py-2.5 text-sm font-body tracking-widest uppercase transition-colors duration-200 ${
                            location.pathname === child.path
                              ? 'text-blue-light'
                              : 'text-sanctuary hover:text-blue-light'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label="Toggle menu">
            
            {isOpen ?
            <X className="w-6 h-6 text-sanctuary" /> :

            <Menu className="w-6 h-6 text-sanctuary" />
            }
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
          animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
          exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-obsidian flex items-center justify-center">
          
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) =>
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex flex-col items-center gap-3"
                >
                  <Link
                    to={link.path}
                    className={`font-display text-4xl tracking-wide transition-colors ${
                      location.pathname === link.path
                        ? 'text-blue-light'
                        : 'text-sanctuary/80 hover:text-blue-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`font-body text-base tracking-widest uppercase transition-colors ${
                            location.pathname === child.path
                              ? 'text-blue-light'
                              : 'text-sanctuary/50 hover:text-blue-light'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}