import { useState, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'

import Nav from './nav'
import Main from './main'
import Header from './header'

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false)

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>
          <Suspense>
            <Outlet />
          </Suspense>
        </Main>
      </Box>
    </>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
}
