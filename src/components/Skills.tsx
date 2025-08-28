"use client";

import { skills } from "@/app/data/constants";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="relative flex justify-center mb-12 sm:mb-20 text-white z-10 px-2 sm:px-0">
      <div className="max-w-xs sm:max-w-6xl w-full mx-auto text-center">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white"
          >
            Skills
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {skills[0].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md
  bg-white/30 dark:bg-white/10
  border border-zinc-300/50 dark:border-white/20
  text-zinc-800 dark:text-white
  hover:scale-105 hover:shadow-md hover:bg-white/50 dark:hover:bg-white/20
  transition-all duration-200"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
