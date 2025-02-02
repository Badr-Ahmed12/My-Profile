"use client"
import { motion } from "framer-motion"
import { User, Code, Book, Mail } from "lucide-react"

const MotionIcon = motion(User)

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <main className="relative bottom-[200px] container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ">
      <motion.div
        className="max-w-3xl w-full  rounded-lg shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-6 "
          >
            عنّي
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-lg leading-relaxed"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4 rtl:space-x-reverse">
              <MotionIcon className="w-6 h-6 mt-1" />
              <p>مرحباً، أنا [اسمك]، مطور ويب متخصص في تصميم وتطوير التطبيقات الحديثة باستخدام أحدث التقنيات.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4 rtl:space-x-reverse">
              <Code className="w-6 h-6 mt-1" />
              <p>
                لدي خبرة واسعة في مجال تطوير الويب باستخدام تقنيات مثل Next.js وReact وTypeScript بالإضافة إلى Tailwind
                CSS لتصميم واجهات مستخدم متجاوبة وجذابة.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4 rtl:space-x-reverse">
              <Book className="w-6 h-6 mt-1" />
              <p>
                أؤمن بأهمية التعلم المستمر ومتابعة أحدث التطورات في مجال التكنولوجيا، وأسعى دائماً لتحسين مهاراتي لتحقيق
                أفضل تجربة للمستخدمين.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4 rtl:space-x-reverse">
              <Mail className="w-6 h-6 mt-1" />
              <p>
                في هذا الموقع ستجد نبذة عن مشاريعي وأعمالي ومهاراتي التقنية، كما يمكنك التواصل معي لمناقشة أفكار التعاون
                أو الاستفسارات.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className=" p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="0 font-semibold">هل لديك مشروع مثير للاهتمام؟ دعنا نتحدث!</p>
        </motion.div>
      </motion.div>
    </main>
  )
}

