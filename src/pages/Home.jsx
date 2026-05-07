import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PathwaySection from '../components/home/PathwaySection';
import VisionSection from '../components/home/VisionSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PathwaySection />
      <VisionSection />
      <CTASection />
    </>
  );
}