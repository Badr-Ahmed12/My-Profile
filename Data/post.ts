export interface Post {
  id: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Post Title 1',
    content: 'This is the content of post 1.',
  },
  {
    id: '2',
    title: 'Post Title 2',
    content: 'This is the content of post 2.',
  },
  {
    id: '3',
    title: 'Post Title 3',
    content: 'This is the content of post 3.',
  },
];

