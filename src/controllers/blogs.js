export async function getBlogs() {
  const res = await fetch('http://172.24.112.1:3003/api/blogs');
  const blogs = await res.json();
  return blogs
}
