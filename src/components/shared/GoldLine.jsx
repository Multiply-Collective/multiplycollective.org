import React from 'react';
import { motion } from 'framer-motion';

export default function GoldLine({ className = '' }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px bg-blue origin-left ${className}`}
    />
  );
}