"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/app/data/constants";
import ProjectModal, { ProjectType } from "./ProjectModal"; 
import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectsSection = () => {
  const [openModal, setOpenModal] = useState<{
    state: boolean;
    project: ProjectType | null;
  }>({ state: false, project: null });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-12  text-zinc-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto text-center mb-26">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground dark:text-shadow-muted-foreground mt-4 max-w-xl mx-auto text-base md:text-lg "
          >
            Here are some of my Projects on which I have been working.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={project.id}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={250}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setOpenModal({ state: true, project })}
                className="group cursor-pointer p-4 rounded-xl shadow hover:shadow-lg transition duration-300 bg-zinc-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-100"
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{project.date}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </section>
  );
};

export default ProjectsSection;
