import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getBlogs } from '../controllers/blogs'

export default function Home({ blogs }) {
  console.log(blogs);
  return (
    <div>
      <Head>
        <title>Jussi Vuorinen</title>
      </Head>

      <p>Jussin Blogi</p>
      {blogs.map(blog => <div>{blog.title}</div>)}
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await getBlogs()
  return { props: { blogs }};
}
