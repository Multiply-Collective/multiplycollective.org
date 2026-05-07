import React from 'react';
import { Outlet } from 'react-router-dom';
import GhostNav from './GhostNav';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-sanctuary">
      <GhostNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}