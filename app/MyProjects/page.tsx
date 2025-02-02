"use client"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "مشروع 1",
    description: "شرح مختصر عن مشروع 1. هذا المشروع يتميز بتصميم فريد وأداء عالي.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["تصميم", "برمجة", "تطوير واجهات"],
  },
  {
    id: 2,
    title: "مشروع 2",
    description: "شرح مختصر عن مشروع 2. يركز هذا المشروع على تحسين تجربة المستخدم.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["تجربة المستخدم", "تصميم تفاعلي"],
  },
  {
    id: 3,
    title: "مشروع 3",
    description: "شرح مختصر عن مشروع 3. هذا المشروع يستخدم أحدث التقنيات في مجال الويب.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["تقنيات حديثة", "أداء عالي"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 rtl"
      style={{
        color: 'var(--text-secondary)',
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-7xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-center mb-12">
          مشاريعي
        </motion.h1>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6" 
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

