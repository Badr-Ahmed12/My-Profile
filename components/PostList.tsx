import { Post } from "../types";
import { deletePost } from "@/hooks/Data";

interface Props {
  posts: Post[];
  onEdit: (post: Post) => void;
  refreshPosts: () => void;
}

export default function PostList({ posts, onEdit, refreshPosts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border border-gray-200 rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mb-2">{post.content}</p>
          <button onClick={() => onEdit(post)} className="mr-2 px-3 py-1 bg-green-500 text-white rounded">تعديل</button>
          <button onClick={async () => { await deletePost(post.id); refreshPosts(); }} className="px-3 py-1 bg-red-500 text-white rounded">حذف</button>
        </div>
      ))}
    </div>
  );
}
