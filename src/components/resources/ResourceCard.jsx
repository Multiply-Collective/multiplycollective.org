import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download } from 'lucide-react';

export default function ResourceCard({ resource, index }) {
  const hasLink = !!resource.link;
  const isExternal = hasLink && (resource.link.startsWith('http') || resource.link.startsWith('mailto'));

  const inner = (
    <div className="py-6 md:py-8 flex items-start justify-between gap-4 cursor-pointer">
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="w-10 h-10 rounded border border-border group-hover:border-gold/30 flex items-center justify-center shrink-0 transition-colors duration-500">
          <FileText className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors duration-500" />
        </div>
        <div className="min-w-0">
          <h3 className="font-body text-sm font-medium text-obsidian group-hover:text-gold transition-colors duration-500">
            {resource.title}
          </h3>
          <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
            {resource.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs font-body tracking-wider uppercase text-gold/60">
              {resource.category}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground font-body">
              {resource.type}
            </span>
          </div>
        </div>
      </div>
      {hasLink && (
        <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors">
            {resource.type === 'PDF' ? (
              <Download className="w-4 h-4 text-gold" />
            ) : (
              <ExternalLink className="w-4 h-4 text-gold" />
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group border-b border-border hover:border-gold/30 transition-colors duration-500"
    >
      {hasLink ? (
        <a href={resource.link} target={isExternal ? '_blank' : '_self'} rel="noopener noreferrer">
          {inner}
        </a>
      ) : inner}
    </motion.div>
  );
}