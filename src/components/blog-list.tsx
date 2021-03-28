import React from 'react'
import Link from 'next/link'

export default function BlogList({ blogs }) {
  return <React.Fragment>
      <p className="text-center">Jussin Blogi</p>
        {blogs && blogs.map(blog => 
          <div key={blog.id}>
            {blog.title}
            <Link href={`/blog/${blog.id}`}>
              <a>Link</a>
            </Link>
          </div>)}
    </React.Fragment>
}
