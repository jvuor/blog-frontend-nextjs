import { Blog } from '../interfaces/blog.interface';

export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch('http://backend:3003/api/blogs');
  const blogs: Blog[] = await res.json().catch(err => console.error(err));
  return blogs
}

export async function getBlog(id: string): Promise<Blog> {
  const res = await fetch('http://backend:3003/api/blogs/' + id);
  const blog: Blog = await res.json().catch(err => console.error(err));
  return blog;
}
