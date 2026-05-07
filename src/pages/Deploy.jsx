import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import GoldButton from '../components/shared/GoldButton';
import TimelineMilestone from '../components/deploy/TimelineMilestone';

const DEPLOY_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/7b1181f97_generated_image.png";

const milestones = [
  {
    phase: 'Weeks 1–4',
    title: 'Vision Casting & Team Formation',
    summary: 'Articulate your vision and begin assembling your core team.',
    strategies: [
      { title: 'Vision Document', description: 'Draft a compelling vision statement that captures your heart for the community you\'re called to serve.' },
      { title: 'Core Team Recruitment', description: 'Identify 3-5 committed individuals who share your vision and will form the foundation of your plant.' },
      { title: 'Prayer Strategy', description: 'Establish a consistent prayer rhythm for your team and your community.' },
      { title: 'Community Research', description: 'Study the demographics, needs, and existing faith communities in your target area.' },
    ],
  },
  {
    phase: 'Weeks 5–10',
    title: 'Community Engagement & Soft Launch',
    summary: 'Begin serving and connecting with your target community.',
    strategies: [
      { title: 'Serve Projects', description: 'Organize 2-3 community service events to build relational equity and demonstrate the love of Christ.' },
      { title: 'Interest Gatherings', description: 'Host informal gatherings — dinners, coffee meetups, neighborhood walks — to introduce your vision.' },
      { title: 'Digital Presence', description: 'Launch a simple website and social media presence to create awareness and connection points.' },
      { title: 'Partnership Development', description: 'Connect with local churches and organizations for prayer, support, and collaboration.' },
    ],
  },
  {
    phase: 'Weeks 11–16',
    title: 'Preview Services & Systems',
    summary: 'Test your gathering format and refine your approach.',
    strategies: [
      { title: 'Preview Gatherings', description: 'Host 4-6 preview services to test your format, worship style, and teaching approach.' },
      { title: 'Discipleship Pathway', description: 'Design a simple pathway for newcomers to move from visitor to committed participant.' },
      { title: 'Leadership Development', description: 'Begin training your core team members for specific roles and responsibilities.' },
      { title: 'Financial Framework', description: 'Establish giving structures, budgets, and financial accountability systems.' },
    ],
  },
  {
    phase: 'Weeks 17–20',
    title: 'Launch & Multiply',
    summary: 'Official launch with a vision for multiplication from day one.',
    strategies: [
      { title: 'Launch Sunday', description: 'Execute a compelling, well-planned first official gathering that reflects your community\'s identity.' },
      { title: 'Follow-Up System', description: 'Implement a relational follow-up process for every first-time guest.' },
      { title: 'Multiplication DNA', description: 'From day one, cast vision for multiplication — every church plant should be planning to plant another.' },
      { title: 'Coaching Continuation', description: 'Maintain your coaching relationship for ongoing support through the critical first year.' },
    ],
  },
];

export default function Deploy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src={DEPLOY_IMG}
          alt="Silhouette in a doorway looking out at a sunrise cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-obsidian/10" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4">Phase Three</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-sanctuary leading-none">
                Deploy
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="The Launch Blueprint"
              title="From preparation to proclamation"
              description="The missional heart behind multiplication is greater than any model. This 20-week framework is a strategic guide — not a rigid formula — focused on a culture where multiplication is a natural outflow."
            />
          </div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, i) => (
            <TimelineMilestone
              key={milestone.phase}
              milestone={milestone}
              index={i}
              isLast={i === milestones.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Multiplication Vision */}
      <section className="bg-sage py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-gold-light mb-6">
              Multiplication Strategy
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-sanctuary leading-tight mb-8">
              Every church plant carries the seed of another
            </h2>
            <GoldLine className="w-16 mx-auto mb-8" />
            <p className="font-body text-sanctuary/70 text-base leading-relaxed mb-4">
              From day one, every planter casts vision for multiplication. We coach every planter to think generationally: who are you raising up? What is the next expression of church that will emerge from this one?
            </p>
            <p className="font-body text-sanctuary/70 text-base leading-relaxed mb-12">
              Multiply Collective partners with global multiplication movements including DCPI and Exponential, hosting yearly practitioner collaborations that strengthen the network and sharpen the mission.
            </p>
            <GoldButton to="/resources" variant="outline">
              Access Launch Resources
            </GoldButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}