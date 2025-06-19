"use client";

import { skills } from "@/app/data/constants";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="relative flex justify-center mb-20  text-white  z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${
            isHero ? "text-3xl sm:text-4xl" : "text-4xl md:text-5xl"
          } font-bold mb-8 tracking-tight text-cyan-300 drop-shadow-md`}
        >
          Skills
        </motion.h2> */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills[0].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-white/10 text-white border-white/20  rounded-full text-sm font-semibold shadow hover:shadow-md hover:scale-105 hover:text-cyan-300 transition-all duration-200"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
