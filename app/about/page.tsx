"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-6"
      >
        عنّي
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-4 text-lg leading-relaxed"
      >
        <p>
          مرحباً، أنا [اسمك]، مطور ويب متخصص في تصميم وتطوير التطبيقات الحديثة باستخدام أحدث التقنيات.
        </p>
        <p>
          لدي خبرة واسعة في مجال تطوير الويب باستخدام تقنيات مثل Next.js وReact وTypeScript بالإضافة إلى Tailwind CSS لتصميم واجهات مستخدم متجاوبة وجذابة.
        </p>
        <p>
          أؤمن بأهمية التعلم المستمر ومتابعة أحدث التطورات في مجال التكنولوجيا، وأسعى دائماً لتحسين مهاراتي لتحقيق أفضل تجربة للمستخدمين.
        </p>
        <p>
          في هذا الموقع ستجد نبذة عن مشاريعي وأعمالي ومهاراتي التقنية، كما يمكنك التواصل معي لمناقشة أفكار التعاون أو الاستفسارات.
        </p>
      </motion.div>
    </main>
  );
}
