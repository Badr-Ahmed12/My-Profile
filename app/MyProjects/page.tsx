"use client";
import { motion } from "framer-motion";
import { ProjectList } from "@/components/ProjectList";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 rtl" style={{ color: 'var(--text-secondary)' }}>
      <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="max-w-7xl mx-auto">
        <motion.h1 variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-4xl font-bold text-center mb-12">مشاريعي</motion.h1>
        <ProjectList />
      </motion.div>
    </div>
  );
}
