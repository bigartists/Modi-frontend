import { Helmet } from 'react-helmet-async'

import MainView from './MainView'

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <MainView />
    </>
  )
}
