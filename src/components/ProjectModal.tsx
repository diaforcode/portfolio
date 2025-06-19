"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface ProjectType {
  title: string;
  image: string;
  date: string;
  tags: string[];
  description: string;
  github?: string;
  webapp?: string;
  member?: {
    name: string;
    img: string;
    github: string;
    linkedin: string;
  }[];
}

interface ProjectModalProps {
  openModal: { state: boolean; project: ProjectType | null };
  setOpenModal: (val: { state: boolean; project: ProjectType | null }) => void;
}

const ProjectModal = ({ openModal, setOpenModal }: ProjectModalProps) => {
  const project = openModal.project;

  return (
    <Dialog
      open={openModal.state}
      onOpenChange={() => setOpenModal({ state: false, project: null })}
    >
      <DialogContent className="group cursor-pointer bg-zinc-900/80 backdrop-blur-md p-6 rounded-xl text-zinc-200 border border-zinc-700 shadow-lg">
        <DialogHeader>
          <DialogTitle>{project && project.title}</DialogTitle>
          <DialogDescription>{project && project.date}</DialogDescription>
        </DialogHeader>

        {project && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title & Date */}
            <div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-sm text-muted-foreground">{project.date}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed">{project.description}</p>

            {/* Members */}
            {project.member && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Members</h3>
                <div className="space-y-3">
                  {project.member.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover shadow"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{member.name}</p>
                        <div className="flex gap-3 mt-1">
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <FaGithub size={18} />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-500"
                          >
                            <FaLinkedin size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.github && (
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </Button>
              )}
              {project.webapp && (
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live App
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
