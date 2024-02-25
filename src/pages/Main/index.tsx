import { Helmet } from 'react-helmet-async'

import MainView from './MainView'

// ----------------------------------------------------------------------

export default function AppPage() {
  const baseUrl = process.env.REACT_APP_HOST_API
  console.log('🚀 ~ AppPage ~ baseUrl:', baseUrl)
  return (
    <>
      <Helmet>
        <title> Dashboard | Modi UI </title>
      </Helmet>

      <MainView />
    </>
  )
}
