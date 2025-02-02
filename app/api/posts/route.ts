 import { NextResponse } from 'next/server';
import { posts, Post } from '@/Data/post';

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  if (!title || !content) {
    return NextResponse.json(
      { message: 'العنوان والمحتوى مطلوبين' },
      { status: 400 }
    );
  }
  const newPost: Post = { id: Date.now().toString(), title, content };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
