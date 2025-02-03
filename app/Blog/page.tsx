"use client";
import Header from "@/components/BlogHeader";
import BlogPostsGrid from "@/components/BlogGrid";
import { posts } from "@/Data/post";

const BlogPage = () => (
  <main
    className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    style={{
      color: "var(--text-secondary)",
    }}
  >
    <div className="max-w-7xl mx-auto">
      <Header />
      <BlogPostsGrid posts={posts} />
    </div>
  </main>
);

export default BlogPage;

