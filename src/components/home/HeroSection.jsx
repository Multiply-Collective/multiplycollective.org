import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';

const HERO_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/539e6ad2f_generated_image.png";
const LOGO = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/0e37a95f9_MultiplyCollectiveLogo5_Blue-Gray_Modifiedforwebsite.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Morning light flooding a modern sacred gathering space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <img
            src={LOGO}
            alt="Multiply Collective"
            className="w-80 sm:w-[26rem] md:w-[36rem] lg:w-[46rem] max-w-full h-auto drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <p className="text-sm font-body tracking-[0.4em] uppercase text-blue-light mb-6">
            Discover · Develop · Deploy
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-sanctuary/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          The Church Planting Initiative of the Church of the Nazarene USA/Canada Region
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="mailto:#"
            className="inline-flex items-center gap-2 font-body text-base tracking-widest uppercase px-8 py-5 bg-blue text-white hover:bg-blue-dark transition-all duration-500 rounded-md"
          >
            Connect With Us
          </a>
          <GoldButton to="/resources" variant="outline">Resources</GoldButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-blue-light/60"
        />
      </motion.div>
    </section>
  );
}