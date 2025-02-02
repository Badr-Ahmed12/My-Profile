"use client";
import { useState } from "react";
import { usePosts } from "@/hooks/usePost";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { Post } from "@/types";

export default function AdminPage() {
  const { posts, setPosts } = usePosts();
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const refreshPosts = async () => {
    const newPosts = await fetch("/api/posts").then((res) => res.json());
    setPosts(newPosts);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">لوحة الإدارة</h1>
      <PostForm editingPost={editingPost} setEditingPost={setEditingPost} refreshPosts={refreshPosts} />
      <hr className="mb-4" />
      <PostList posts={posts} onEdit={setEditingPost} refreshPosts={refreshPosts} />
    </div>
  );
}
