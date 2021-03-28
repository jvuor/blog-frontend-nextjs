export async function getBlogs() {
  const res = await fetch('http://backend:3003/api/blogs');
  const blogs = await res.json().catch(err => console.err(err));
  return blogs
}
