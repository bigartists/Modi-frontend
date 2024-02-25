import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles'
import { Button, Typography, Container, Box } from '@mui/material'
import NotFoundView from './NotFound'

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Modi </title>
      </Helmet>

      <NotFoundView />
    </>
  )
}
