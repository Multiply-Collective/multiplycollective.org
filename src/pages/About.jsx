import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import GoldButton from '../components/shared/GoldButton';

const ABOUT_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/ccd03d367_generated_image.png";
const GROWTH_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/4658c6069_generated_image.png";
const DIVERSE_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/939ff5c0f_generated_image.png";


export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img
          src={ABOUT_IMG}
          alt="Industrial loft space prepared for a sacred gathering, golden sunlight streaming through windows"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}>
              
              <p className="text-xs font-body tracking-[0.3em] uppercase text-blue-light mb-4">About Us</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sanctuary leading-none">
                Who We Are
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-sanctuary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <SectionHeading
                eyebrow="Our Mission"
                title="Empower the many to reach the one" />
              
              <div className="mt-8 space-y-6">
                <p className="font-body text-obsidian/60 text-base leading-relaxed">
                  Multiply Collective will empower the many to reach the one by discovering, developing, and deploying followers of Christ to make disciples, raise leaders, and form networks that plant churches.
                </p>
                

                
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Our Goals"
                title="200 churches planted per year" />
              
              <div className="mt-8 space-y-6">
                <p className="font-body text-obsidian/60 text-base leading-relaxed">Within the next 3–4 years, Multiply Collective is committed to raising up 78 District Church Multiplication Catalysts, 780 Regional Catalytic Multiplication Leaders, and 40 certified Church Planting Mentors and Coaches. Together, this network is unified around one bold goal: 200 churches planted per year across the USA and Canada Region — a movement that reproduces from day one.

                </p>
                

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diverse community image */}
      <section className="w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={DIVERSE_IMG}
          alt="A diverse community of people gathered together in faith"
          className="w-full h-full object-cover" />
        
      </section>

      {/* Identity image + text */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[50vh] lg:h-auto">
            <img
              src={GROWTH_IMG}
              alt="Community garden at dawn with morning mist and seedlings growing"
              className="w-full h-full object-cover" />
            
          </div>
          <div className="bg-blue-dark flex items-center px-6 md:px-12 lg:px-20 py-20 lg:py-0">
            <div>
              <p className="text-xs font-body tracking-[0.3em] uppercase text-blue-light mb-4">
                Our Identity
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sanctuary leading-tight mb-8">
                Not an institution. A collective.
              </h2>
              <p className="font-body text-sanctuary/70 text-base leading-relaxed mb-8">
                Multiply Collective is not just an arm of the Mission — it is the heart of the Mission. We are a relational network of catalysts, coaches, and planters united by five core values: The Call, The Spirit, The Mission, The Mentor, and The Commission.
              </p>
              <GoldButton to="/discover">Join the Movement</GoldButton>
            </div>
          </div>
        </div>
      </section>
    </>);

}