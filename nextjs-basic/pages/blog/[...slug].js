import React from 'react'
import {useRouter} from 'next/router'

function BlogPostsPage() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>BlogPostsPage</div>
  )
}

export default BlogPostsPage