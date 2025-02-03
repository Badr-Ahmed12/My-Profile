"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/Data/Projects";

export const ProjectList = () => (
  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <motion.div key={project.id} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
        <ProjectCard project={project} />
      </motion.div>
    ))}
  </motion.div>
);
