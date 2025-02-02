import { Post } from "@/types";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch("/api/posts");
    return await res.json();
  } catch (err) {
    console.error("Error fetching posts:", err);
    return [];
  }
};

export const addOrUpdatePost = async (post: Post, isEditing: boolean) => {
  const method = isEditing ? "PUT" : "POST";
  const url = isEditing ? `/api/posts/${post.id}` : "/api/posts";

  await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: post.title, content: post.content }),
  });
};

export const deletePost = async (id: string) => {
  if (confirm("متأكد إنك عايز تحذف المشاركة؟")) {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
  }
};
