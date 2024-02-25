import { Helmet } from 'react-helmet-async'

import ProductsView from './ProductView'

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products111 | UI </title>
      </Helmet>

      <ProductsView />
    </>
  )
}
