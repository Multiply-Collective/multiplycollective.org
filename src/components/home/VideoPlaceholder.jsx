import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-center mb-12"
    >
      <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden ring-1 ring-sanctuary/15 bg-sanctuary/5 group">
        {/* Replace this placeholder with a YouTube embed */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center shadow-lg">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-sanctuary/50">
            Video Coming Soon
          </p>
        </div>
      </div>
    </motion.div>
  );
}