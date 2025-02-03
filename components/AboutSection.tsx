"use client"
import { motion } from "framer-motion"
import { User, Code, Book, Mail } from "lucide-react"
import { containerVariants, itemVariants } from "./Effects/AboutAnimations"
import { aboutData } from "@/Data/index"

export default function AboutSection() {
  return (
    <main className="relative bottom-[200px] container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br">
      <motion.div
        className="max-w-3xl w-full rounded-lg shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-6"
          >
            عنّي
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-lg leading-relaxed"
          >
            {aboutData.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}  // Add the key prop here
                variants={itemVariants}
                className="flex items-start space-x-4 rtl:space-x-reverse"
              >
                <Icon className="w-6 h-6 mt-1" />
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="font-semibold">هل لديك مشروع مثير للاهتمام؟ دعنا نتحدث!</p>
        </motion.div>
      </motion.div>
    </main>
  )
}
