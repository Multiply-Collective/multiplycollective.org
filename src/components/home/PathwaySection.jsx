import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Sprout, Rocket, ArrowUpRight } from 'lucide-react';
import GoldLine from '../shared/GoldLine';
import SectionHeading from '../shared/SectionHeading';
import VideoPlaceholder from './VideoPlaceholder';

const steps = [
{
  icon: Compass,
  title: 'Discover',
  subtitle: 'Your Calling',
  description: "The Multiply Collective helps prospective church planters discern and deepen their calling through a comprehensive church planting handbook and assessment centers. Whether you are exploring God's call or seeking clarity for your next step, we provide guidance, encouragement, and evaluation to help identify your strengths, readiness, and potential for church planting.",
  buttonLabel: 'Discover Resources',
  buttonLink: '/resources?filter=Discover',
  resources: [
  { label: 'Church Planting Pathway Handbook', link: '/resources?filter=Discover' },
  { label: 'Assessment Centers', link: '/resources?filter=Discover' },
  { label: 'Prayer & Fasting', link: null }]

},
{
  icon: Sprout,
  title: 'Develop',
  subtitle: 'Your Gifts',
  description: "The Multiply Collective helps church planters develop their vision, strategy, and leadership capacity through practical training and personalized coaching. Our training experiences and coaching provide the tools, guidance, and next steps needed to move from calling to launch with confidence and clarity.",
  buttonLabel: 'Develop Resources',
  buttonLink: '/resources?filter=Develop',
  resources: [
  { label: 'Church Planting Coaching', link: '/resources?filter=Develop' },
  { label: 'Find a Prayer Partner', link: null },
  { label: 'Church Planting Training', link: '/resources?filter=Develop' }]

},
{
  icon: Rocket,
  title: 'Deploy',
  subtitle: 'Into Mission',
  description: "The Multiply Collective supports church planters as they launch, establish, and multiply healthy church expressions through funding and networking opportunities. By connecting leaders with strategic resources, financial support, and collaborative relationships, we help create sustainable churches that make disciples, raise leaders, and expand God's Kingdom.",
  buttonLabel: 'Deploy Resources',
  buttonLink: '/resources?filter=Deploy',
  resources: [
  { label: 'Church Planting Networking', link: '/resources?filter=Deploy' },
  { label: 'Church Planting Funding', link: '/resources?filter=Deploy' },
  { label: 'Create a Prayer Team', link: null }]

}];


export default function PathwaySection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <VideoPlaceholder />

        <SectionHeading
          eyebrow="The Pathway"
          title="Empowering the many to reach the one"
          description="Discovering, developing, and deploying followers of Christ to make disciples, raise leaders, and form networks that plant churches"
          align="center"
          light />
        

        <GoldLine className="w-24 mx-auto my-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) =>
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="flex flex-col">
            
              <div className="group block flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-blue/30 flex items-center justify-center group-hover:bg-blue/10 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-blue-light" />
                  </div>
                  <div className="h-px flex-1 bg-sanctuary/10 group-hover:bg-blue transition-colors duration-500" />
                  <span className="text-sm font-body tracking-widest text-sanctuary/40">0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-light text-sanctuary mb-1 group-hover:text-blue-light transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-sm font-body tracking-[0.2em] uppercase text-blue-light mb-4">
                  {step.subtitle}
                </p>
                <p className="font-body text-base text-sanctuary/60 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Resource list */}
              <div className="mb-6 space-y-0 border-t border-sanctuary/10">
                {step.resources.map((r, ri) =>
              r.link ?
              <Link
                key={ri}
                to={r.link}
                className="group/r flex items-center justify-between py-3 border-b border-sanctuary/10 hover:border-blue/30 transition-colors duration-300">
                
                      <span className="font-body text-sm text-sanctuary/50 group-hover/r:text-sanctuary transition-colors duration-300">{r.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-blue/40 group-hover/r:text-blue transition-colors duration-300 flex-shrink-0 ml-2" />
                    </Link> :

              <div key={ri} className="flex items-center justify-between py-3 border-b border-sanctuary/10">
                      <span className="font-body text-sm text-sanctuary/50 italic">{r.label}</span>
                    </div>

              )}
              </div>


            </motion.div>
          )}
        </div>
      </div>
    </section>);

}