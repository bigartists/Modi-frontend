import { Helmet } from 'react-helmet-async'

import BlogView from '@/pages/Blog/BlogView'

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Modi UI </title>
      </Helmet>

      <BlogView />
    </>
  )
}
