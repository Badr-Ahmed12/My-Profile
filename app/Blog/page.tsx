"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { posts } from "@/Data/post"

export default function BlogPage() {
  return (
    <main className="container mx-auto p-4">
      {/* عنوان الصفحة مع تأثير حركة */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        المدونة
      </motion.h1>

      {/* شبكة عرض التدوينات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }} 
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {new Date(post.title).toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <Link href={`/blog/${post.id}`} className="cursor-default text-blue-600 hover:underline">
              اقرأ المزيد
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}


