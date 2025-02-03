"use client";
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/ContactForm';

export default function ContactPage() {
  return (
    <main className="mx-auto p-4 mt-48" style={{ color: 'var(--text-secondary)' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-6"
      >
        تواصل معنا
      </motion.h1>
      <ContactForm />
    </main>
  );
}
