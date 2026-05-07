import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import GoldButton from '../components/shared/GoldButton';
import ContemplativeCard from '../components/discover/ContemplativeCard';

const DISCOVER_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/10febc560_generated_image.png";
const GATHERING_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/6e649c7aa_generated_image.png";
const VISION_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/f42ea07e0_generated_image.png";
const GROWTH_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/fd6161e65_generated_image.png";

const resources = [
  {
    image: DISCOVER_IMG,
    title: 'Calling Assessment',
    description: 'A guided self-assessment designed to help you discern whether church planting is your next step. Explore your spiritual gifts, leadership capacity, and kingdom vision.',
  },
  {
    image: GATHERING_IMG,
    title: 'Connect with a Coach',
    description: 'Be matched with an experienced church planter who will walk alongside you through the discernment process — offering wisdom, encouragement, and honest feedback.',
  },
  {
    image: GROWTH_IMG,
    title: 'Vision Workshops',
    description: 'Attend an immersive workshop designed to help you articulate your vision for a new faith community. Explore context, calling, and community in a sacred space.',
  },
  {
    image: VISION_IMG,
    title: 'Prayer & Discernment',
    description: 'Join a community of seekers in guided prayer retreats and discernment circles. Sometimes the most important step is simply being still and listening.',
  },
];

const journeySteps = [
  { step: '01', title: 'Pray', text: 'God\'s Kingdom can only be multiplied through His empowerment. Begin in prayer and complete dependence on the Holy Spirit.' },
  { step: '02', title: 'Assess', text: 'Complete the Calling Assessment to understand your readiness, spiritual gifts, and leadership capacity.' },
  { step: '03', title: 'Connect', text: 'Community is essential. Meet with a certified coach or mentor who will walk alongside you through the discernment process.' },
  { step: '04', title: 'Clarify', text: 'Attend a Vision Workshop to articulate your calling, define your target community, and take your first steps toward multiplication.' },
];

export default function Discover() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-6">Phase One</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-obsidian leading-none mb-8">
              Discover
            </h1>
            <p className="font-body text-obsidian/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Every follower of Jesus Christ has a call of God upon their life to multiply His Kingdom. The journey begins with a question: Is God calling me to plant? Through guided discernment, spiritual assessment, and relational connection, we help you explore that question with clarity and courage.
            </p>
          </motion.div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Contemplative Cards */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Explore"
            title="Resources for the seeking heart"
            description="Hover to reveal each resource. Take your time — this is a season of seeking, not rushing."
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

      {/* Journey Steps */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Discernment Journey"
            title="Four steps from question to clarity"
            light
          />

          <div className="mt-16 space-y-0">
            {journeySteps.map((item, i) => (
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
            <a
              href="/develop"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 border border-blue text-blue hover:bg-blue hover:text-white transition-all duration-500 rounded-md"
            >
              Continue to Develop →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}