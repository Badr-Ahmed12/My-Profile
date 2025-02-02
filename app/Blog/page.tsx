"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { posts } from "@/Data/post"


export default function BlogPage() {
  return (
    <main
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        color: 'var(--text-secondary)'
      }}
    >
      <div className="max-w-7xl mx-auto">
         <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          المدونة
        </motion.h1>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className=" rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
            >

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className=" text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.title}
                  </span>
                  <p className="text-sm">
                    {new Date(post.content).toLocaleDateString("ar-EG", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <h2 className="text-2xl font-bold mb-3 ">{post.title}</h2>
                <p className=" mb-4 line-clamp-3">{post.content}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className=" font-semibold py-2 px-4 rounded flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  اقرأ المزيد
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

