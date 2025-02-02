import { useState, useEffect } from "react";
import { Post } from "@/types";
import { fetchPosts } from "./Data";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return { posts, setPosts };
}
