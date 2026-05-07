import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Sprout, Rocket } from 'lucide-react';
import GoldLine from '../shared/GoldLine';
import SectionHeading from '../shared/SectionHeading';

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    subtitle: 'Your Calling',
    description: 'Every follower of Jesus Christ has a call upon their life. Through guided discernment and assessments, we help you explore whether God is calling you to multiply His Kingdom.',
    link: '/discover',
  },
  {
    icon: Sprout,
    title: 'Develop',
    subtitle: 'Your Gifts',
    description: 'Community is essential. Through coaching, training, and relational networks, we develop the character and competencies needed to multiply disciples and raise leaders.',
    link: '/about',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    subtitle: 'Into Mission',
    description: 'Church planting is the heart of the Great Commission. Launch with a team, a vision, and a multiplication strategy designed to reproduce from day one.',
    link: '/deploy',
  },
];

export default function PathwaySection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-sanctuary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The Pathway"
          title="From calling to commissioning"
          description="Every multiplication movement begins with a single step. Our three-phase pathway walks alongside you — from the first whisper of calling to the bold act of planting a church."
          align="center"
        />

        <GoldLine className="w-24 mx-auto my-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Link to={step.link} className="group block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="h-px flex-1 bg-border group-hover:bg-gold transition-colors duration-500" />
                  <span className="text-xs font-body tracking-widest text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-light text-obsidian mb-1 group-hover:text-gold transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-xs font-body tracking-[0.2em] uppercase text-gold mb-4">
                  {step.subtitle}
                </p>
                <p className="font-body text-sm text-obsidian/60 leading-relaxed">
                  {step.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}