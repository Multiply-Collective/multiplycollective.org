import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GoldButton({ to, children, variant = 'filled', className = '' }) {
  const base = "inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 transition-all duration-500";
  
  const styles = {
    filled: `${base} bg-blue text-white hover:bg-blue-dark rounded-md`,
    outline: `${base} border border-sanctuary text-sanctuary hover:bg-sanctuary hover:text-obsidian rounded-md`,
    dark: `${base} bg-obsidian text-white hover:bg-obsidian/80 rounded-md`,
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      <Link to={to} className={`${styles[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}