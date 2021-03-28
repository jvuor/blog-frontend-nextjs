import Head from 'next/head'

import BlogList from '../components/blog-list'
import { getBlogs } from '../controllers/blogs'

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Jussi</title>
      </Head>
      <BlogList blogs={blogs}></BlogList>
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getBlogs()
  return { props: { blogs }};
}
