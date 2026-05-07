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
            <p className="text-sanctuary/60 font-body text-sm leading-relaxed">
              A movement dedicated to discovering, developing, and deploying church planters 
              into homes, communities, and cities across the world.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase text-sanctuary/40 mb-6">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Discover', path: '/discover' },
                { label: 'Develop', path: '/develop' },
                { label: 'Deploy', path: '/deploy' },
                { label: 'Resources', path: '/resources' },

              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sanctuary/60 hover:text-blue-light transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase text-sanctuary/40 mb-6">The Pathway</h4>
            <div className="flex flex-col gap-3">
              <Link to="/discover" className="text-sanctuary/60 hover:text-blue-light transition-colors text-sm font-body">
                Discover Your Calling
              </Link>
              <Link to="/develop" className="text-sanctuary/60 hover:text-blue-light transition-colors text-sm font-body">
                Develop Your Gifts
              </Link>
              <Link to="/deploy" className="text-sanctuary/60 hover:text-blue-light transition-colors text-sm font-body">
                Deploy Into Mission
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-sanctuary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sanctuary/30 text-xs font-body tracking-wider">
            © {new Date().getFullYear()} Multiply Collective. All rights reserved.
          </p>
          <div className="w-8 h-px bg-blue/40" />
        </div>
      </div>
    </footer>
  );
}