import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className={`text-xs font-body tracking-[0.3em] uppercase mb-4 ${
          light ? 'text-blue-light' : 'text-blue'
        }`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 ${
        light ? 'text-sanctuary' : 'text-obsidian'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base md:text-lg leading-relaxed ${
          light ? 'text-sanctuary/70' : 'text-obsidian/60'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}