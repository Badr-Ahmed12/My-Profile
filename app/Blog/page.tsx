"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

// بيانات تجريبية للتدوينات
const posts: BlogPost[] = [
  {
    id: 1,
    title: "أول تدوينة",
    excerpt: "ده ملخص بسيط للتدوينة الأولى اللي بتتكلم عن تجاربي في تطوير الويب.",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "ثاني تدوينة",
    excerpt: "ملخص للتدوينة الثانية اللي بتستعرض أحدث التقنيات في عالم البرمجة.",
    date: "2025-01-05",
  },
  {
    id: 3,
    title: "تدوينة جديدة",
    excerpt: "أحدث النصائح والمقالات عن تطوير التطبيقات وكل جديد في المجال.",
    date: "2025-01-10",
  },
];

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
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {new Date(post.date).toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              اقرأ المزيد
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
