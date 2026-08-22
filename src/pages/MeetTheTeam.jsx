import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';

const TEAM_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/939ff5c0f_generated_image.png";

const team = [
  {
    initials: 'TC',
    name: 'Team Member',
    role: 'Director, Church Planting Initiative',
    bio: 'Leads the Multiply Collective vision and strategy across the USA/Canada Region.',
  },
  {
    initials: 'CC',
    name: 'Team Member',
    role: 'Church Multiplication Catalyst',
    bio: 'Coaches and resources church planters through the Discover and Develop stages.',
  },
  {
    initials: 'CC',
    name: 'Team Member',
    role: 'Church Multiplication Catalyst',
    bio: 'Walks alongside planters discerning their calling and developing their gifts.',
  },
  {
    initials: 'CC',
    name: 'Team Member',
    role: 'Assessment Center Coordinator',
    bio: 'Organizes and facilitates Assessment Centers for prospective church planters.',
  },
  {
    initials: 'CC',
    name: 'Team Member',
    role: 'Training & Pathway Lead',
    bio: 'Develops training experiences and pathway resources for planters in development.',
  },
  {
    initials: 'CC',
    name: 'Team Member',
    role: 'Networking & Deploy Coordinator',
    bio: 'Connects planters with networks, funding, and collaborative relationships.',
  },
];

export default function MeetTheTeam() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src={TEAM_IMG}
          alt="A diverse community of people gathered together in faith"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-sm font-body tracking-[0.3em] uppercase text-blue-light mb-4">About Us</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sanctuary leading-none">
                Meet The Team
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our People"
            title="The leaders behind the movement"
            description="The Multiply Collective is powered by a team of dedicated church planting leaders, catalysts, and coaches walking alongside planters at every stage of the journey."
            align="center"
            light
          />
          <GoldLine className="w-24 mx-auto my-16" />
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-obsidian pb-24 md:pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-sanctuary/15 bg-sanctuary/5 p-8 hover:border-blue-light/40 hover:bg-sanctuary/10 transition-colors duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue/15 border border-blue/30 flex items-center justify-center">
                  <span className="font-display text-3xl font-semibold text-blue-light">{member.initials}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-sanctuary mb-2">{member.name}</h3>
                <p className="font-body text-sm tracking-[0.15em] uppercase text-blue-light mb-4">{member.role}</p>
                <p className="font-body text-sm text-sanctuary/60 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}