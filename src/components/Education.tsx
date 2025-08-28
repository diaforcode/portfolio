"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Education, education } from "@/app/data/constants";

export default function EducationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="education" className="relative w-full py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-36">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground dark:text-shadow-muted-foreground mt-4 max-w-xl mx-auto text-base md:text-lg "
        >
          My education has been a journey of self-discovery and growth. Here are
          the details.
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        style={{ y }}
        className="grid gap-10 max-w-4xl mx-auto"
      >
        {education.map((item: Education, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.4, type: "spring" }}
          >
            <Card
              className="group border border-zinc-300/20 dark:border-white/10 
                      bg-white/20  dark:bg-white/5 
                        backdrop-blur-md shadow-md dark:shadow-xl 
                        hover:shadow-lg dark:hover:shadow-2xl 
                        transition-all duration-300 rounded-2xl overflow-hidden "
            >
              <CardContent className="flex flex-col gap-4 p-6 text-left ">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-sm text-zinc-700 dark:text-white/80">
                  {item.school}
                </p>
                <p className="text-sm italic text-zinc-600 dark:text-white/60">
                  {item.date}
                </p>
                <p
                  className="text-sm mt-2 leading-relaxed text-zinc-800 dark:text-white/80 
                              whitespace-pre-wrap transition-all duration-300 line-clamp-2 
                              group-hover:line-clamp-none"
                >
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
