import React from 'react';
import { motion } from 'framer-motion';
import CycleOfResurgence from '../components/about/CycleOfResurgence';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';
import GoldButton from '../components/shared/GoldButton';

const ABOUT_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/ccd03d367_generated_image.png";
const GROWTH_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/4658c6069_generated_image.png";
const DIVERSE_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/939ff5c0f_generated_image.png";

const coreValues = [
{ num: '01', keyword: 'Prayer', theme: 'THE POWER', tagline: "We Can Only Fulfill God's Assignment with God's Power", body: null },
{ num: '02', keyword: 'Christian', theme: 'THE CALL', tagline: 'We Believe Everyone is Called', body: "Every Follower of Jesus Christ has a Call of God upon their life to Multiply God's Kingdom." },
{ num: '03', keyword: 'Holiness', theme: 'THE SPIRIT', tagline: 'We Are Spirit Sent', body: "God's Kingdom can only be multiplied through His Empowerment; therefore, we must be completely reliant upon The Holy Spirit as we consecrate ourselves to God." },
{ num: '04', keyword: 'Missional', theme: 'THE COMMISSION', tagline: 'We Are the Heart, not an Arm', body: "Church planting is not just an arm of The Mission; it is the heart of The Mission. Fulfilling the Great Commission requires it." },
{ num: '05', keyword: 'Collaboration', theme: 'THE MENTOR', tagline: "We Don't Go Alone", body: 'Community is essential. Networking strengthens the mission and the individual through relationships, resources, residency and reproduction.' },
{ num: '06', keyword: 'Listen', theme: 'THE MISSION', tagline: 'We Prioritize Mission Over Model', body: 'The missional heart behind multiplication is greater than the model. The focus is not the "type" of church plant, but a culture where multiplication is a natural outflow.' }];


const goals = [
{ label: 'Catalysts', value: '78 District Church Multiplication Catalysts' },
{ label: 'Leaders', value: '780 Regional Catalytic Multiplication Leaders' },
{ label: 'Coaches', value: "100 Regional Certified Church Planting Mentors/Coaches" },
{ label: 'Churches', value: '200 Churches Planted per year USA / Canada Region' }];


export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img
          src={ABOUT_IMG}
          alt="Industrial loft space prepared for a sacred gathering, golden sunlight streaming through windows"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}>
              
              <p className="text-sm font-body tracking-[0.3em] uppercase text-blue-light mb-4">About Us</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sanctuary leading-none">
                Who We Are
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <SectionHeading
              eyebrow="Our Mission"
              title="Making Christlike disciples in the nations."
              align="center"
              light />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <SectionHeading
                eyebrow="Our Vision"
                title="Empower the Many to Reach the One"
                light />
              
              <div className="mt-8">
                <p className="font-body text-sanctuary/60 text-lg leading-relaxed">
                  Discovering, developing, and deploying followers of Christ to make disciples, raise leaders, and form networks that plant core churches to Bless their communities, Bring people to Jesus, and Become like Christ.
                </p>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Our Goals"
                title="Multiplication Objectives"
                light />
              
              <ul className="mt-8 space-y-4">
                {goals.map((item) =>
                <li key={item.label} className="flex gap-4 items-start">
                    <span className="font-body text-sm tracking-widest uppercase text-blue-light mt-1 w-24 flex-shrink-0">{item.label}</span>
                    <span className="font-body text-sanctuary/60 text-lg leading-relaxed">{item.value}</span>
                  </li>
                )}
              </ul>
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

      {/* Core Values */}
      <section className="bg-obsidian py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-body tracking-[0.3em] uppercase mb-4 text-blue-light">OUR CORE VALUES</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sanctuary leading-tight mb-6">Made to multiply</h2>
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-sanctuary leading-tight mb-6">Every district. Every church. Every Believer.</p>
            <div className="h-px w-16 bg-blue-light mx-auto" />
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coreValues.map((val, i) =>
            <motion.div
              key={val.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border border-sanctuary/15 bg-sanctuary/5 p-8 hover:border-blue-light/50 hover:bg-sanctuary/10 transition-colors duration-300">
              
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-body tracking-[0.3em] text-blue-light">{val.num}</span>
                  <div className="h-px flex-1 bg-sanctuary/10" />
                  <span className="text-xs font-body tracking-[0.2em] uppercase text-sanctuary/40">{val.theme}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-sanctuary mb-2">{val.keyword}</h3>
                <p className="font-body text-sm font-semibold text-blue-light uppercase tracking-wider mb-3">{val.tagline}</p>
                {val.body && <p className="font-body text-sanctuary/60 text-sm leading-relaxed">{val.body}</p>}
              </motion.div>
            )}
          </div>

        </div>
      </section>

      <CycleOfResurgence />
    </>);

}