import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-sanctuary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl italic font-light leading-tight max-w-4xl mb-16 text-sanctuary/90">
          "Go therefore and make disciples of all nations."
        </p>

        <div className="w-16 h-px bg-blue mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h4 className="font-display text-2xl font-bold mb-6 text-blue-light">Multiply Collective</h4>
            <p className="text-sanctuary/60 font-body text-base leading-relaxed">
              A movement dedicated to discovering, developing, and deploying church planters 
              into homes, communities, and cities across the world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-body tracking-widest uppercase text-sanctuary/40 mb-6">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Meet The Team', path: '/meet-the-team' },
                { label: 'Events', path: '/events' },
                { label: 'Resources', path: '/resources' },

              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sanctuary/60 hover:text-blue-light transition-colors text-base font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>


        </div>

        <div className="mt-20 pt-8 border-t border-sanctuary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sanctuary/30 text-sm font-body tracking-wider">
            © {new Date().getFullYear()} Multiply Collective. All rights reserved.
          </p>
          <div className="w-8 h-px bg-blue/40" />
        </div>
      </div>
    </footer>
  );
}