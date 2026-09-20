import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';

const EVENTS_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/539e6ad2f_generated_image.png";

const events = [
  {
    title: 'Assessment Center — Fall 2026',
    date: 'October 16–18, 2026',
    location: 'Kansas City, MO',
    category: 'Assessment Center',
    description:
      'A few-day comprehensive evaluation designed to help prospective church planters discern capacity and readiness to plant a church. Assessment Centers provide valuable feedback that helps planters prepare for the development stage.',
    link: '/contact',
    external: false,
  },
  {
    title: 'Exponential Global 2027',
    date: 'March 1–4, 2027',
    location: 'Orlando, FL',
    category: 'Exponential',
    description:
      'The largest gathering of church planting leaders in the world. Join thousands of planters, pastors, and multiplication leaders for inspiration, training, and collaboration. Hosted by Exponential.',
    link: 'https://exponential.org',
    external: true,
  },
  {
    title: 'Assessment Center — Spring 2027',
    date: 'April 22–24, 2027',
    location: 'Lenexa, KS',
    category: 'Assessment Center',
    description:
      'A few-day comprehensive evaluation designed to help prospective church planters discern capacity and readiness to plant a church. Assessment Centers provide valuable feedback that helps planters prepare for the development stage.',
    link: '/contact',
    external: false,
  },
  {
    title: 'Exponential West 2027',
    date: 'September 28 – October 1, 2027',
    location: 'Los Angeles, CA',
    category: 'Exponential',
    description:
      'A regional Exponential gathering on the West Coast, bringing together church planting leaders for equipping, encouragement, and connection. Hosted by Exponential.',
    link: 'https://exponential.org',
    external: true,
  },
];

export default function Events() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-sm font-body tracking-[0.3em] uppercase text-blue-light mb-6">Gather</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-sanctuary leading-none mb-8">
                Upcoming Events
              </h1>
              <p className="font-body text-sanctuary/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Assessment Centers, conferences, and gatherings designed to help you discern,
                develop, and deploy — alongside a community of church planting leaders.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img
                src={EVENTS_IMG}
                alt="Morning light flooding a modern sacred gathering space"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Events list */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-sanctuary/15 bg-sanctuary/5 p-8 md:p-10 hover:border-blue-light/40 hover:bg-sanctuary/10 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-body tracking-[0.2em] uppercase text-blue-light mb-4">
                      {event.category}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-sanctuary mb-4">
                      {event.title}
                    </h2>
                    <div className="flex flex-wrap gap-6 mb-5">
                      <span className="flex items-center gap-2 font-body text-sm text-sanctuary/50">
                        <Calendar className="w-4 h-4 text-blue-light" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2 font-body text-sm text-sanctuary/50">
                        <MapPin className="w-4 h-4 text-blue-light" />
                        {event.location}
                      </span>
                    </div>
                    <p className="font-body text-sanctuary/60 text-base leading-relaxed max-w-2xl">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    {event.external ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-6 py-3 border border-blue/40 text-blue-light hover:bg-blue/10 transition-colors duration-300"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href={event.link}
                        className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-6 py-3 bg-blue text-white hover:bg-blue-dark transition-colors duration-300"
                      >
                        Register
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}