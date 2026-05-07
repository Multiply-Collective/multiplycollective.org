import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function TimelineMilestone({ milestone, index, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gold/20">
        {!isLast && <div className="absolute bottom-0 left-0 w-full h-full bg-gold/20" />}
      </div>

      {/* Milestone dot */}
      <div className="absolute left-2 md:left-4 top-6 w-4 h-4 rounded-full border-2 border-blue bg-obsidian z-10" />

      {/* Content */}
      <div className="pl-12 md:pl-16 pb-12">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left group"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-body tracking-[0.2em] uppercase text-gold block mb-2">
                {milestone.phase}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-sanctuary font-light group-hover:text-blue-light transition-colors duration-300">
                {milestone.title}
              </h3>
              <p className="font-body text-sm text-sanctuary/50 mt-2">
                {milestone.summary}
              </p>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-gold/50" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 pb-2 border-t border-sanctuary/10 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {milestone.strategies.map((strategy, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-1 h-1 rounded-full bg-blue-light mt-2 shrink-0" />
                      <div>
                        <h4 className="font-body text-sm font-medium text-sanctuary mb-1">
                          {strategy.title}
                        </h4>
                        <p className="font-body text-xs text-sanctuary/50 leading-relaxed">
                          {strategy.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}