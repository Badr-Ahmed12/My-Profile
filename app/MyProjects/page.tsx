"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

// بيانات تجريبية للمشاريع
const projects: Project[] = [
  {
    id: 1,
    title: "مشروع 1",
    description: "شرح مختصر عن مشروع 1.",
    image: "/projects/project1.jpg", // تأكد إن الصورة موجودة في مجلد public
  },
  {
    id: 2,
    title: "مشروع 2",
    description: "شرح مختصر عن مشروع 2.",
    image: "/projects/project2.jpg",
  },
  {
    id: 3,
    title: "مشروع 3",
    description: "شرح مختصر عن مشروع 3.",
    image: "/projects/project3.jpg",
  },
  // ممكن تضيف مشاريع تانية هنا...
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto p-4">
      {/* عنوان الصفحة مع حركة دخول بسيطة */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        مشاريعي
      </motion.h1>

      {/* شبكة عرض المشاريع */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
