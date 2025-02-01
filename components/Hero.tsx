import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from './ui/Button';

// تعريف Variants للحركات
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} // تأكد إن الصورة موجودة في مجلد public
      aria-label="قسم البطل"
    >
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        aria-hidden="true"  
      />

       <motion.div
        className="relative z-10 text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          أهلاً بيك في محفظتي
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          مطور ويب محترف يبني تجارب رقمية مميزة.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button variant="primary">استكشف المزيد</Button>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
