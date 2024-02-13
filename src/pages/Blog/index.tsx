import { Helmet } from 'react-helmet-async'

import BlogView from '@/pages/Blog/BlogView'

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <BlogView />
    </>
  )
}
