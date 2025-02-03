import BlogPost from "./BlogPost";

interface Post {
  id: string;
  title: string;
  content: string;
}

const BlogPostsGrid = ({ posts }: { posts: Post[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <BlogPost key={post.id} post={post} />
    ))}
  </div>
);

export default BlogPostsGrid;
