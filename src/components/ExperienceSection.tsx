"use client";

import { experience } from "@/app/data/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-4 relative z-10">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground dark:text-shadow-muted-foreground mt-4 max-w-xl mx-auto text-base md:text-lg"
        >
          Here’s a look at my professional journey and key experiences.
        </motion.p>
      </div>

      <div className="grid gap-10 max-w-4xl mx-auto">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.4, type: "spring" }}
          >
            <Card
              className="group border border-zinc-300/20 dark:border-white/10 
                        bg-white/20 dark:bg-white/5 
                        backdrop-blur-md shadow-md dark:shadow-xl 
                        hover:shadow-lg dark:hover:shadow-2xl 
                        transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="flex flex-col gap-4 p-6 text-left">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-zinc-700 dark:text-white/80">
                  {job.company}
                </p>
                <p className="text-sm italic text-zinc-600 dark:text-white/60">
                  {job.duration}
                </p>
                <p
                  className="text-sm mt-2 leading-relaxed text-zinc-800 dark:text-white/80 
                              whitespace-pre-wrap transition-all duration-300 line-clamp-2 
                              group-hover:line-clamp-none"
                >
                  {job.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
