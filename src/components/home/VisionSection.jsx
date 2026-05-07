import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';

const VISION_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/96a5c5c7a_generated_image.png";

export default function VisionSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed image */}
      <div className="relative h-[60vh] md:h-[80vh]">
        <img
          src={VISION_IMG}
          alt="Person standing on a hilltop at golden hour overlooking a vast landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent" />

        {/* Floating offset text */}
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-xl"
            >
              <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-6">
                Our Vision
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-sanctuary leading-tight mb-6">
                Empower the many to reach the one.
              </h2>
              <p className="font-body text-sanctuary/70 text-base leading-relaxed mb-8">
                Multiply Collective exists to discover, develop, and deploy followers of Christ — 
                making disciples, raising leaders, and forming networks that plant churches across 
                the USA, Canada, and beyond.
              </p>
              <GoldButton to="/about">Learn More</GoldButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}