import { NextResponse } from 'next/server';
import { posts, Post } from "@/Data/post";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((post) => post.id === params.id);
  if (!post) {
    return NextResponse.json(
      { message: 'المشاركة مش موجودة' },
      { status: 404 }
    );
  }
  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = posts.findIndex((post) => post.id === params.id);
  if (index === -1) {
    return NextResponse.json(
      { message: 'المشاركة مش موجودة' },
      { status: 404 }
    );
  }
  const { title, content } = await request.json();
  if (!title || !content) {
    return NextResponse.json(
      { message: 'العنوان والمحتوى مطلوبين' },
      { status: 400 }
    );
  }
  posts[index] = { ...posts[index], title, content };
  return NextResponse.json(posts[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = posts.findIndex((post) => post.id === params.id);
  if (index === -1) {
    return NextResponse.json(
      { message: 'المشاركة مش موجودة' },
      { status: 404 }
    );
  }
  posts.splice(index, 1);
  return NextResponse.json({ message: 'تم حذف المشاركة' });
}
