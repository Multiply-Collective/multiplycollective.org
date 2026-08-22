import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import ResourceCard from '../components/resources/ResourceCard';

const RESOURCE_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/ba4af63ed_generated_a88850ab.png";

const categories = ['All', 'Discover', 'Develop', 'Deploy', 'Additional Resources'];

const resources = [
{
  title: 'Church Planting Pathway Handbook',
  description: 'A step-by-step guide to help church planters navigate the journey from calling to launch and multiplication. The handbook provides practical guidance, resources, and next steps for every stage of the church planting process.',
  category: 'Discover',
  type: 'PDF',
  link: 'https://media.base44.com/files/public/69f91c5d31dad328146ca459/b4df5d690_Multiply_Collective_MARCH2026.docx'
},
{
  title: 'Assessment Centers',
  description: 'A few-day comprehensive evaluation designed to help prospective church planters discern capacity and readiness to plant a church. Assessment Centers provide valuable feedback that helps planters prepare for the development stage.',
  category: 'Discover',
  type: 'Assessment Tool',
  link: null
},
{
  title: 'Church Planting Coaching',
  description: 'Personalized guidance from an experienced church planter or ministry leader who walks alongside you throughout the planting journey. Coaches provide encouragement, accountability, wisdom, and practical support as you move from vision to launch and beyond.',
  category: 'Develop',
  type: 'Program',
  link: '/contact'
},
{
  title: 'Church Planting Training',
  description: 'Practical training that equips church planters with the knowledge, skills, and tools needed to start healthy and sustainable church expressions. Training opportunities help leaders develop strategy, systems, and launch plans.',
  category: 'Develop',
  type: 'Training Program',
  link: 'https://www.dcpi.org'
},
{
  title: 'Church Planting Funding',
  description: 'Strategic financial resources designed to help remove barriers and accelerate church planting efforts. Funding opportunities include a Hope Grant and Alabaster Grants.',
  category: 'Deploy',
  type: 'PDF',
  link: 'https://usacanadaregion.org/sites/default/files/2026-01/HOPE%20GRANT%20APPLICATION%20revised-013026.pdf'
},
{
  title: 'Church Planting Networking',
  description: 'Meaningful connections with church planters, multiplication leaders, churches, and ministry partners who share a passion for starting new churches. Networks provide relationships, collaboration, encouragement, shared learning, and opportunities for multiplication.',
  category: 'Deploy',
  type: 'Program',
  link: '/contact'
}];


export default function Resources() {
  const location = useLocation();
  const resourcesSectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    if (filter && categories.includes(filter)) {
      setActiveFilter(filter);
      setTimeout(() => {
        resourcesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.search]);

  const filteredResources = activeFilter === 'All' ?
  resources :
  resources.filter((r) => r.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              
              <p className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-6">The Arsenal</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-sanctuary leading-none mb-8">
                Resources
              </h1>
              <p className="font-body text-sanctuary/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Everything you need for the journey — downloadable guides, planning tools, 
                and ministry materials crafted for church planters at every stage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block">
              
              <img
                src={RESOURCE_IMG}
                alt="Hand sketching a plan on paper with warm natural lighting"
                className="w-full h-64 object-cover" />
              
            </motion.div>
          </div>
        </div>
      </section>

      <GoldLine className="max-w-7xl mx-auto" />

      {/* Filter + Resources */}
      <section ref={resourcesSectionRef} className="py-12 md:py-20 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          {/* Filter Ribbon */}
          <div className="sticky top-20 z-30 bg-obsidian/95 backdrop-blur-sm py-4 mb-8 border-b border-sanctuary/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-body tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                activeFilter === cat ?
                'bg-sanctuary text-obsidian' :
                'text-sanctuary/50 hover:text-sanctuary border border-transparent hover:border-sanctuary/20'}`
                }>
                
                  {cat}
                </button>
              )}
            </div>
          </div>

          {/* Resource count */}
          <p className="text-sm font-body tracking-wider text-sanctuary/40 mb-8">
            {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} available
          </p>

          {/* Resource list */}
          <div>
            {filteredResources.map((resource, i) =>
            <ResourceCard key={resource.title} resource={resource} index={i} />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      




















      
    </>);

}