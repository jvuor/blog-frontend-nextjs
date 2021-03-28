import Link from 'next/link';
import React from 'react';

import { getBlog, getBlogs } from '../../controllers/blogs';
import { Blog } from '../../interfaces/blog.interface';

type BlogPageProps = {
  blog: Blog,
}

export default function BlogPage({ blog }: BlogPageProps): JSX.Element {
  return <React.Fragment>
    Blog page
    {blog.title}
    {blog.content}
    <Link href="/"><a>Back</a></Link>
  </React.Fragment>
}

export async function getStaticProps({params}) {
  const blogId = params.id;
  const blog = await getBlog(blogId)
  return { props: { blog }};
}

export async function getStaticPaths() {
  const blogs = await getBlogs();
  return {
    paths: blogs.map(blog => ({ params: { id: blog.id }})),
    fallback: false,
  };
}
