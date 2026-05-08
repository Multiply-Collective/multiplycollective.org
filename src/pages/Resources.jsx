import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import ResourceCard from '../components/resources/ResourceCard';

const RESOURCE_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/ba4af63ed_generated_a88850ab.png";

const categories = ['All', 'Coach & Mentor', 'Handbook', 'Assessment', 'Training', 'Financial Support'];

const resources = [
  {
    title: 'Coach & Mentor',
    description: 'Every church planter needs someone in their corner. Our Coach-Mentor program pairs you with a certified, experienced leader who walks alongside you through every phase — from discernment to launch. Coaching is relational, personal, and built for multiplication.',
    category: 'Coach & Mentor',
    type: 'Program',
    link: 'mailto:sfreeman@usacanadaregion.org',
  },
  {
    title: 'How to Plant a Church — Handbook',
    description: 'A comprehensive handbook covering the theology, strategy, and practical steps of planting a healthy, multiplying church. From vision to community to launch day — this is the foundational guide for every church planter in our network.',
    category: 'Handbook',
    type: 'PDF',
    link: 'https://media.base44.com/files/public/69f91c5d31dad328146ca459/b4df5d690_Multiply_Collective_MARCH2026.docx',
  },
  {
    title: 'Church Planter Assessment',
    description: 'A structured assessment tool designed to evaluate the capacity, readiness, and calling of a potential church planter. Covering character, competency, and chemistry — this assessment helps both the planter and their coach gain honest, actionable clarity before moving forward.',
    category: 'Assessment',
    type: 'Assessment Tool',
    link: null,
  },
  {
    title: 'DCPI Training Partnership',
    description: 'Multiply Collective partners with DCPI (Dynamic Church Planting International) to provide world-class training for church planters and multiplication leaders. DCPI\'s proven methodology equips planters with the tools, frameworks, and global networks needed to multiply churches effectively.',
    category: 'Training',
    type: 'Training Program',
    link: 'https://www.dcpi.org',
  },
  {
    title: 'HOPE Grant — Financial Support',
    description: 'The HOPE Grant provides financial support to church planters in the USA & Canada Region. Designed to reduce the financial barriers of launching a new church, this grant is available to qualified planters committed to multiplication. Download the application to get started.',
    category: 'Financial Support',
    type: 'PDF',
    link: 'https://usacanadaregion.org/sites/default/files/2026-01/HOPE%20GRANT%20APPLICATION%20revised-013026.pdf',
  },
];

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredResources = activeFilter === 'All'
    ? resources
    : resources.filter(r => r.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-6">The Arsenal</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-sanctuary leading-none mb-8">
                Resources
              </h1>
              <p className="font-body text-sanctuary/60 text-base md:text-lg max-w-xl leading-relaxed">
                Everything you need for the journey — downloadable guides, planning tools, 
                and ministry materials crafted for church planters at every stage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img
                src={RESOURCE_IMG}
                alt="Hand sketching a plan on paper with warm natural lighting"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Filter + Resources */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          {/* Filter Ribbon */}
          <div className="sticky top-20 z-30 bg-obsidian/95 backdrop-blur-sm py-4 mb-8 border-b border-sanctuary/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs font-body tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-sanctuary text-obsidian'
                      : 'text-sanctuary/50 hover:text-sanctuary border border-transparent hover:border-sanctuary/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resource count */}
          <p className="text-xs font-body tracking-wider text-sanctuary/40 mb-8">
            {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} available
          </p>

          {/* Resource list */}
          <div>
            {filteredResources.map((resource, i) => (
              <ResourceCard key={resource.title} resource={resource} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-6">
              Need Something Specific?
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic text-sanctuary mb-6">
              We're building this library alongside you
            </h2>
            <p className="font-body text-sanctuary/60 text-sm leading-relaxed mb-10">
              Multiply Collective is a living resource. If you need a tool we haven't built yet, 
              let us know. Our team of experienced planters and coaches is always developing new 
              materials based on the real needs of our community.
            </p>
            <GoldLine className="w-12 mx-auto" />
          </motion.div>
        </div>
      </section>
    </>
  );
}