import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import GoldButton from '../components/shared/GoldButton';
import ContemplativeCard from '../components/discover/ContemplativeCard';

const COACHING_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/37ce00c28_generated_image.png";
const TRAINING_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/91acc3093_generated_image.png";
const NETWORK_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/2ad0cf16a_generated_image.png";
const RESIDENCY_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/da8956c4c_generated_image.png";

const resources = [
  {
    image: COACHING_IMG,
    title: 'Coaching',
    description: 'Be paired with a certified Church Planting Mentor or Coach who walks alongside you — offering wisdom, accountability, and care as you grow into your calling.',
  },
  {
    image: TRAINING_IMG,
    title: 'Training',
    description: 'Align your skills through structured assessments and training designed to develop the character, competencies, and vision needed to multiply disciples and raise leaders.',
  },
  {
    image: NETWORK_IMG,
    title: 'Networking',
    description: 'Community is essential. Connect with a Multiplication Network built on Relationship, Resource, Residency, and Reproduction — strengthening the mission through collaboration.',
  },
  {
    image: RESIDENCY_IMG,
    title: 'Residency',
    description: 'Immerse yourself in a hands-on residency experience, developing the practical and spiritual foundations needed to plant and multiply healthy churches.',
  },
];

const developSteps = [
  { step: '01', title: 'Align', text: 'Align your language, assessments, and training with the Multiply Collective framework — ensuring a shared culture of multiplication from the start.' },
  { step: '02', title: 'Train', text: 'Engage in structured training that sharpens your leadership competencies, deepens your theological foundations, and clarifies your multiplication vision.' },
  { step: '03', title: 'Coach', text: 'Meet regularly with a certified Church Planting Mentor or Coach. Community is essential — you don\'t go alone.' },
  { step: '04', title: 'Network', text: 'Join a Multiplication Network built around Relationship, Resource, Residency, and Reproduction. Collaboration strengthens both the mission and the individual.' },
];

export default function Develop() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-6">Phase Two</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-sanctuary leading-none mb-8">
              Develop
            </h1>
            <p className="font-body text-sanctuary/60 text-base md:text-lg max-w-2xl leading-relaxed">
              God's Kingdom can only be multiplied through His empowerment. In this phase, we walk alongside you through coaching, training, and relational networks — developing the character, competencies, and vision needed to multiply disciples, raise leaders, and plant churches.
            </p>
          </motion.div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Cards */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="How We Develop"
            title="Four pillars of multiplication"
            description="Development happens relationally, not in isolation. Hover to explore each pillar of the Develop phase."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
            {resources.map((resource, i) => (
              <ContemplativeCard
                key={resource.title}
                image={resource.image}
                title={resource.title}
                description={resource.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Development Journey"
            title="Four steps from potential to prepared"
            light
          />

          <div className="mt-16 space-y-0">
            {developSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-sanctuary/10 py-10 md:py-14 grid grid-cols-12 gap-4 items-baseline"
              >
                <span className="col-span-2 md:col-span-1 text-gold/40 font-body text-xs tracking-widest">
                  {item.step}
                </span>
                <h3 className="col-span-10 md:col-span-3 font-display text-2xl md:text-3xl text-sanctuary font-light">
                  {item.title}
                </h3>
                <p className="col-span-12 md:col-span-8 font-body text-sanctuary/50 text-sm leading-relaxed md:pl-8">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/deploy"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 border border-sanctuary text-sanctuary hover:bg-sanctuary hover:text-obsidian transition-all duration-500 rounded-md"
            >
              Continue to Deploy →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values highlight */}
      <section className="bg-blue-dark py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-sanctuary/60 mb-6">
              Core Value
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-sanctuary leading-tight mb-8">
              We don't go alone
            </h2>
            <GoldLine className="w-16 mx-auto mb-8" />
            <p className="font-body text-sanctuary/70 text-base leading-relaxed mb-12">
              Community is essential. Networking strengthens the mission and the individual through collaboration, training, coaching, and care. The Mentor is one of our five core values — because multiplication was never meant to happen in isolation.
            </p>
            <a
              href="mailto:sfreeman@usacanadaregion.org"
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 border border-sanctuary text-sanctuary hover:bg-sanctuary hover:text-obsidian transition-all duration-500 rounded-md"
            >
              Connect with a Coach
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}