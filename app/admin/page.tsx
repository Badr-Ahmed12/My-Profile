"use client";

import { useState, useEffect, FormEvent } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data: Post[] = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert("من فضلك ادخل العنوان والمحتوى");
      return;
    }

    if (editingPost) {
      await fetch(`/api/posts/${editingPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      setEditingPost(null);
    } else {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
    }
    setTitle("");
    setContent("");
    fetchPosts();
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleDelete = async (id: string) => {
    if (confirm("متأكد إنك عايز تحذف المشاركة؟")) {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      fetchPosts();
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">لوحة الإدارة</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="ادخل العنوان"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="ادخل المحتوى"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {editingPost ? "تعديل المشاركة" : "إضافة مشاركة"}
        </button>
      </form>
      <hr className="mb-4" />
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-4 p-4 border border-gray-200 rounded"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mb-2">{post.content}</p>
            <div>
              <button
                onClick={() => handleEdit(post)}
                className="mr-2 px-3 py-1 bg-green-500 text-white rounded"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
