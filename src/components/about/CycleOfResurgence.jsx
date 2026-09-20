import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

const CYCLE_IMG = "https://media.base44.com/images/public/69f91c5d31dad328146ca459/11eeada35_hmmcirclenew.png";

export default function CycleOfResurgence() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="The Cycle of Resurgence"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <img
            src={CYCLE_IMG}
            alt="Cycle of Resurgence infographic showing Blessing Our Community, Bringing People to Jesus, Becoming Christlike Disciples, and Mobilizing All Nazarenes in Unity"
            className="w-full max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}