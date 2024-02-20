import { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Stack, { StackProps } from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { SxProps, Theme, alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ListItemButton from '@mui/material/ListItemButton'

import { usePathname } from 'src/routes/hooks'
// import { RouterLink } from 'src/routes/components'
import RouterLink from '@/routes/components/routerLink'

import { useResponsive } from 'src/hooks/use-responsive'

import { account } from 'src/_mock/account'

import Logo from 'src/components/logo'
import Scrollbar from 'src/components/scrollbar'

import { NAV } from '../config-layout'
import navConfig, { ICONS } from '../config-navigation'
import illustration_avatar from '@/assets/illustrations/illustration_avatar.png'

export const renderAccount = (
  <Box
    sx={{
      my: 3,
      mx: 2.5,
      py: 2,
      px: 2.5,
      display: 'flex',
      borderRadius: 1.5,
      alignItems: 'center',
      bgcolor: theme => alpha(theme.palette.grey[500], 0.12),
    }}
  >
    <Avatar src={account.photoURL} alt="photoURL" />

    <Box sx={{ ml: 2 }}>
      <Typography variant="subtitle2">{account.displayName}</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {account.role}
      </Typography>
    </Box>
  </Box>
)

export const renderUpgrade = (
  <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
    <Stack
      alignItems="center"
      spacing={3}
      sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
    >
      <Box
        component="img"
        src={illustration_avatar}
        sx={{ width: 100, position: 'absolute', top: -50 }}
      />

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6">Get more?</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          From only $69
        </Typography>
      </Box>

      <Button
        href="https://material-ui.com/store/items/minimal-dashboard/"
        target="_blank"
        variant="contained"
        color="inherit"
      >
        Upgrade to Pro
      </Button>
    </Stack>
  </Box>
)

export const renderMenu = (
  <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
    {navConfig.map(item => (
      <NavItem key={item.title} item={item} />
    ))}
  </Stack>
)

function NavItem({ item }: any) {
  const pathname = usePathname()

  const active = item.path === pathname

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: theme => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: theme => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  )
}
