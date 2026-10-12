import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PathwaySection from '../components/home/PathwaySection';
import VisionSection from '../components/home/VisionSection';
import NewsletterSignup from '../components/home/NewsletterSignup';
export default function Home() {
  return (
    <>
      <HeroSection />
      <PathwaySection />
      <VisionSection />
      <NewsletterSignup />
    </>
  );
}