// components/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";

const experience = [
  {
    title: "Freelancer",
    company: "Self-employed",
    duration: "2020 – Present",
    description:
      "Worked on a variety of freelance projects using React, Node.js, and modern web technologies. Collaborated with international clients and delivered responsive, accessible solutions.",
  },
  {
    title: "Computer Science Engineer",
    company: "Department of Promotion and Real Estate Management",
    duration: "2023 – Present",
    description:
      "Developing internal applications, maintaining systems, and supporting digital transformation initiatives within the department.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-4 text-white relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/80 mt-4 text-lg max-w-2xl mx-auto"
        >
          Here’s a look at my professional journey.
        </motion.p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-white/70">{job.company}</p>
            <p className="text-sm italic text-white/60 mb-2">{job.duration}</p>
            <p className="text-white/80 text-sm">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
