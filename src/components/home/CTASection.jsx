import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';
import GoldLine from '../shared/GoldLine';

export default function CTASection() {
  return (
    <section className="bg-blue-dark py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          
          <p className="text-xs font-body tracking-[0.3em] uppercase mb-6 text-[hsl(var(--foreground))]">READY TO BEGIN?

          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-sanctuary leading-tight max-w-4xl mx-auto mb-8">We believe that everyone is called.

          </h2>
          <GoldLine className="w-16 mx-auto mb-8" />
          <p className="font-body text-sanctuary/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">Every Follower of Jesus Christ has a Call of God upon their life to Multiply God’s Kingdom. Whether you're sensing a call or ready to launch — there's a place for you here.

          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 bg-blue text-white hover:bg-blue-dark transition-all duration-500 rounded-md">
              
              Discover Your Calling
            </a>
            <GoldButton to="/resources" variant="outline">Explore Resources</GoldButton>
          </div>
        </motion.div>
      </div>
    </section>);

}