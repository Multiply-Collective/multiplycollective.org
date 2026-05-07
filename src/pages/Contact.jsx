import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', stage: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-6">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-obsidian leading-none mb-8">
              Contact Us
            </h1>
            <p className="font-body text-obsidian/60 text-base md:text-lg max-w-xl leading-relaxed">
              Whether you're sensing a call, ready to launch, or simply want to learn more — 
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Form + Info */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              eyebrow="We're Here"
              title="Start the conversation"
              description="No matter where you are in the journey, we want to walk alongside you. Reach out and someone from our team will respond within 48 hours."
            />
            <div className="mt-12 space-y-8">
              <div>
                <p className="text-xs font-body tracking-[0.2em] uppercase text-gold mb-2">Email</p>
                <p className="font-body text-obsidian/70">hello@multiplycollective.org</p>
              </div>
              <div>
                <p className="text-xs font-body tracking-[0.2em] uppercase text-gold mb-2">Response Time</p>
                <p className="font-body text-obsidian/70">Within 48 hours</p>
              </div>
              <div>
                <p className="text-xs font-body tracking-[0.2em] uppercase text-gold mb-4">The Pathway</p>
                <div className="space-y-2">
                  {['Discover Your Calling', 'Develop Your Gifts', 'Deploy Into Mission'].map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <p className="font-body text-sm text-obsidian/60">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-20">
                <div>
                  <div className="w-12 h-px bg-gold mx-auto mb-8" />
                  <h3 className="font-display text-3xl text-obsidian mb-4">Thank you.</h3>
                  <p className="font-body text-obsidian/60 text-sm leading-relaxed max-w-sm mx-auto">
                    We've received your message and will be in touch within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-body tracking-[0.2em] uppercase text-obsidian/50 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 font-body text-sm text-obsidian placeholder:text-obsidian/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body tracking-[0.2em] uppercase text-obsidian/50 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 font-body text-sm text-obsidian placeholder:text-obsidian/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body tracking-[0.2em] uppercase text-obsidian/50 mb-2">Where are you in the journey?</label>
                  <select
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 font-body text-sm text-obsidian focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="">Select a stage</option>
                    <option value="discover">Discover — Exploring a calling</option>
                    <option value="develop">Develop — In training or coaching</option>
                    <option value="deploy">Deploy — Ready to launch</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-body tracking-[0.2em] uppercase text-obsidian/50 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 font-body text-sm text-obsidian placeholder:text-obsidian/30 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about yourself and your vision..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 bg-gold text-sanctuary hover:bg-gold-dark transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}