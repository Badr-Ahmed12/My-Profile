import { useState, FormEvent } from "react";
import { Post } from "../types";
import { addOrUpdatePost } from "@/hooks/Data";

interface Props {
  editingPost: Post | null;
  setEditingPost: (post: Post | null) => void;
  refreshPosts: () => void;
}

export default function PostForm({ editingPost, setEditingPost, refreshPosts }: Props) {
  const [title, setTitle] = useState(editingPost?.title || "");
  const [content, setContent] = useState(editingPost?.content || "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !content) return alert("يرجى إدخال العنوان والمحتوى");

    await addOrUpdatePost({ id: editingPost?.id || "", title, content }, !!editingPost);
    setEditingPost(null);
    refreshPosts();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="العنوان" className="w-full p-2 border rounded mb-2" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="المحتوى" className="w-full p-2 border rounded h-32 mb-2" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        {editingPost ? "تعديل المشاركة" : "إضافة مشاركة"}
      </button>
    </form>
  );
}
