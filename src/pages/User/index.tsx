import { Helmet } from 'react-helmet-async'

import UserView from './UserView'

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Modi </title>
      </Helmet>

      <UserView />
    </>
  )
}
