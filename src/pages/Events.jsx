import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, ArrowUpRight, User, Mail } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';

const EVENTS_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/539e6ad2f_generated_image.png";

const ASSESSMENT_DESCRIPTION =
  'A few-day comprehensive evaluation designed to help prospective church planters discern capacity and readiness to plant a church. Assessment Centers provide valuable feedback that helps planters prepare for the development stage.';

const events = [
  {
    title: 'Assessment Center — South Central',
    date: 'Nov. 5–7, 2026',
    startDate: '2026-11-05',
    location: 'Oklahoma City, OK',
    category: 'Assessment Center',
    leaders: 'D.S. Jim Bond | Dave Hazel',
    field: 'SNU Educational Field',
    contact: 'dave@oknaz.org',
    description: ASSESSMENT_DESCRIPTION,
  },
  {
    title: 'Assessment Center — East Central',
    date: 'Nov. 12–14, 2026',
    startDate: '2026-11-12',
    location: 'Piqua, OH',
    category: 'Assessment Center',
    leaders: 'D.S. Andy Monnin | Mark Coulter',
    field: 'MVNU Educational Field',
    contact: 'mark.coulter@thevalley.church',
    description: ASSESSMENT_DESCRIPTION,
  },
  {
    title: 'Assessment Center — Central',
    date: 'March 3–5, 2027',
    startDate: '2027-03-03',
    location: 'Valparaiso, IN',
    category: 'Assessment Center',
    leaders: 'D.S. Brian Wangler | Shawn Evans',
    field: 'ONU Educational Field',
    contact: 'shawne@nazco.church',
    description: ASSESSMENT_DESCRIPTION,
  },
  {
    title: 'Assessment Center — Northwest',
    date: 'March 2027',
    startDate: '2027-03-01',
    location: 'Seattle, WA',
    category: 'Assessment Center',
    leaders: 'D.S. Ev Tustin | D.S. Sam Flores',
    field: 'NNU Educational Field',
    contact: 'etustin@wapacnaz.org',
    description: ASSESSMENT_DESCRIPTION,
  },
  {
    title: 'Assessment Center — Southeast',
    date: 'July 29–31, 2027',
    startDate: '2027-07-29',
    location: 'Batesburg, SC',
    category: 'Assessment Center',
    leaders: 'D.S. Sam Flores | Jeremy Reese',
    field: 'TNU Educational Field',
    contact: 'jeremy.reese@southcarolinanazarene.com',
    description: ASSESSMENT_DESCRIPTION,
  },
  {
    title: 'Exponential Learning Community',
    date: 'Nov. 4–5, 2026 | Jan. 27–28, 2027 | Apr. 28–29, 2027',
    startDate: '2026-11-04',
    location: 'Wilmore, KY · Austin, TX · Naperville, IL',
    category: 'Exponential',
    description:
      'In person | 3 gatherings — a cohort-style learning community where church planting leaders grow together across three in-person sessions during the 2026–2027 season.',
    link: 'https://exponential.org',
    external: true,
  },
  {
    title: 'Exponential Reproducing Networks',
    date: 'Spring 2027',
    startDate: '2027-03-20',
    location: 'Online',
    category: 'Exponential',
    description:
      'Online — a network experience equipping churches to move from addition to reproduction, helping leaders build multiplying systems and structures. Hosted by Exponential.',
    link: 'https://exponential.org',
    external: true,
  },
  {
    title: 'Exponential West 2027',
    date: 'September 28 – October 1, 2027',
    startDate: '2027-09-28',
    location: 'Los Angeles, CA',
    category: 'Exponential',
    description:
      'A regional Exponential gathering on the West Coast, bringing together church planting leaders for equipping, encouragement, and connection. Hosted by Exponential.',
    link: 'https://exponential.org',
    external: true,
  },
  {
    title: 'Exponential Global 2027',
    date: 'March 1–4, 2027',
    startDate: '2027-03-01',
    location: 'Orlando, FL',
    category: 'Exponential',
    description:
      'The largest gathering of church planting leaders in the world. Join thousands of planters, pastors, and multiplication leaders for inspiration, training, and collaboration. Hosted by Exponential.',
    link: 'https://exponential.org',
    external: true,
  },
];

const categories = ['All', 'Assessment Center', 'Exponential'];

export default function Events() {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const visibleEvents = activeFilter === 'All'
    ? [...events].sort((a, b) => a.startDate.localeCompare(b.startDate))
    : events.filter((e) => e.category === activeFilter).sort((a, b) => a.startDate.localeCompare(b.startDate));

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
          {/* Filter Ribbon */}
          <div className="sticky top-20 z-30 bg-black/95 backdrop-blur-sm py-4 mb-8 border-b border-sanctuary/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-sm font-body tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-sanctuary text-black'
                      : 'text-sanctuary/50 hover:text-sanctuary border border-transparent hover:border-sanctuary/20'
                  }`}
                >
                  {cat === 'Assessment Center' ? 'Assessment Centers' : cat === 'Exponential' ? 'Exponential' : cat}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm font-body tracking-wider text-sanctuary/40 mb-8">
            {visibleEvents.length} {visibleEvents.length === 1 ? 'event' : 'events'} listed
          </p>

          <div className="space-y-6">
            {visibleEvents.map((event, i) => (
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
                      {event.field && (
                        <span className="flex items-center gap-2 font-body text-sm text-sanctuary/50">
                          <ExternalLink className="w-4 h-4 text-blue-light" />
                          {event.field}
                        </span>
                      )}
                    </div>
                    {event.leaders && (
                      <div className="flex items-center gap-2 font-body text-sm text-sanctuary/50 mb-5">
                        <User className="w-4 h-4 text-blue-light flex-shrink-0" />
                        <span>
                          Assessment Leaders: {event.leaders}
                          {event.contact && (
                            <>
                              {' '}·{' '}
                              <a
                                href={`mailto:${event.contact}`}
                                className="text-blue-light hover:text-white transition-colors inline-flex items-center gap-1"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                {event.contact}
                              </a>
                            </>
                          )}
                        </span>
                      </div>
                    )}
                    <p className="font-body text-sanctuary/60 text-base leading-relaxed max-w-2xl">
                      {event.description}
                    </p>
                  </div>
                  {event.contact && (
                    <div className="flex-shrink-0">
                      <a
                        href={`mailto:${event.contact}`}
                        className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-6 py-3 bg-blue text-white hover:bg-blue-dark transition-colors duration-300"
                      >
                        Contact
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                  {event.external && (
                    <div className="flex-shrink-0">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-6 py-3 border border-blue/40 text-blue-light hover:bg-blue/10 transition-colors duration-300"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}