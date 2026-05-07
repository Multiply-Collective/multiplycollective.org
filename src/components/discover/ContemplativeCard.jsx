import React from 'react';
import { motion } from 'framer-motion';

export default function ContemplativeCard({ image, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Default overlay */}
        <div className="absolute inset-0 bg-obsidian/30 transition-opacity duration-500 group-hover:opacity-0" />
        
        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Always visible title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl text-sanctuary font-light mb-2 transition-transform duration-500 group-hover:-translate-y-2">
            {title}
          </h3>
          {/* Revealed on hover */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-out">
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="font-body text-sm text-sanctuary/70 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}