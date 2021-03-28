import Head from 'next/head'
import { getBlogs } from '../controllers/blogs'

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Jussi</title>
      </Head>

      <p className="text-center">Jussin Blogi</p>
      {blogs.map(blog => <div key={blog.id}>{blog.title}</div>)}
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getBlogs()
  return { props: { blogs }};
}
