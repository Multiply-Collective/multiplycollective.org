import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import GoldLine from '../shared/GoldLine';

const NEWSLETTER_FORM_URL = 'https://app.e2ma.net/app2/audience/signup/1927618/1920390.748811654/';

export default function NewsletterSignup() {
  return (
    <section id="newsletter" className="py-24 md:py-32 px-6 md:px-12 bg-obsidian">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}>

          <div className="w-12 h-12 rounded-full border border-blue/30 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-5 h-5 text-blue-light" />
          </div>

          <p className="text-sm font-body tracking-[0.3em] uppercase text-blue-light mb-4">Stay Connected</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-sanctuary leading-tight mb-6">
            Join the Newsletter
          </h2>
          <p className="font-body text-lg md:text-xl text-sanctuary/60 leading-relaxed mb-10">
            Get updates on upcoming events, assessment centers, training opportunities, and resources for the church planting journey — straight to your inbox.
          </p>

          <GoldLine className="w-24 mx-auto mb-10" />

          <motion.a
            href={NEWSLETTER_FORM_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-blue hover:bg-blue-dark text-white font-body text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-colors duration-300">
            Sign Up for the Newsletter
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}