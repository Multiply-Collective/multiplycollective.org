import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GoldLine from '../components/shared/GoldLine';

const TRAINING_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/13a0456c2_generated_image.png";

const courses = [
  {
    title: 'Church Planting Essentials',
    paragraphs: [
      'This foundational DCPI training teaches trainees how to plant a church. Using the pattern of a baby being formed in 9 months of pregnancy, students learn how to start churches from conception to birth and beyond. They plan culturally relevant outreach, develop a Process of Discipleship and learn about how to avoid difficulties in planting.',
      'During Church Planting Essentials training each participant is required to prepare Vision-Plan-Timeline (VPT). The VPT is designed to help you begin applying what you are learning in the training and to move you further along in the vision and planting of new churches.',
    ],
  },
  {
    title: 'Churches Planting Churches',
    paragraphs: [
      'Healthy churches are the largest untapped resource for planting more healthy churches. This training is about harnessing the power of the mother-daughter relationship by equipping healthy churches to multiply. Even a small church can make a huge impact for the kingdom. Bring new life to your congregation through practical, proven principles of daughter church planting.',
    ],
  },
];

export default function Training() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src={TRAINING_IMG}
          alt="Ministry leaders gathered around tables during church planting training"
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
              <p className="text-sm font-body tracking-[0.3em] uppercase text-blue-light mb-4">Get Equipped</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sanctuary leading-none">
                Training
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Partner"
            description="The Multiply Collective partners with Dynamic Church Planting International (DCPI) to provide church planting training. Below are two courses that we recommend for all potential church planters."
            align="center"
            light
          />
          <GoldLine className="w-24 mx-auto my-16" />

          {/* Feature image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <img
              src="https://media.base44.com/images/public/69f91c5d31dad328146ca459/8ac9a7e6c_generated_image.png"
              alt="A coach guiding church planting leaders through a training session"
              className="w-full h-[320px] md:h-[480px] object-cover rounded border border-sanctuary/10 shadow-2xl shadow-black/40"
            />
          </motion.div>

          {/* Courses */}
          <div className="max-w-3xl mx-auto flex flex-col gap-20">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-sanctuary mb-6">
                  {course.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {course.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="font-body text-base md:text-lg text-sanctuary/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mt-24 text-center"
          >
            <p className="font-body text-lg md:text-xl text-sanctuary/80 leading-relaxed mb-10">
              Reach out if you are interested in participating in one of these upcoming trainings.
            </p>
            <a
              href="mailto:sfreeman@usacanadaregion.org"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-widest uppercase px-10 py-4 bg-blue text-white hover:bg-blue-dark transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              Reach Out
            </a>
          </motion.div>

          {/* DCPI note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mt-20 pt-12 border-t border-sanctuary/10 text-center"
          >
            <p className="font-body text-base text-sanctuary/50 leading-relaxed">
              *For more church planting training resources visit the{' '}
              <a
                href="https://dcpi.org/training-tracks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-light hover:text-blue transition-colors underline underline-offset-4 inline-flex items-center gap-1"
              >
                DCPI website
                <ExternalLink className="w-4 h-4" />
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}