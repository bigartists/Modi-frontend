import { useEffect, useMemo } from 'react'

import Box from '@mui/material/Box'
import Stack, { StackProps } from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'

import { SxProps, Theme, alpha } from '@mui/material/styles'

import { usePathname } from 'src/routes/hooks'

import { useResponsive } from 'src/hooks/use-responsive'

import Logo from 'src/components/logo'
import Scrollbar from 'src/components/scrollbar'

import { NAV } from './config-layout'
import { ICONS } from './config-navigation'

import Group from './Group'
import { NavItemBaseProps, SlotProps } from './types'
import { MenuListData } from './menu-list-data'

export default function Nav({ openNav, onCloseNav }: any) {
  const pathname = usePathname()

  const upLg = useResponsive('up', 'lg', '')

  useEffect(() => {
    if (openNav) {
      onCloseNav()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const NavSectionVertical = ({
    data,
    slotProps,
    ...other
  }: StackProps & {
    data: {
      subheader: string
      items: NavItemBaseProps[]
    }[]
    slotProps?: SlotProps
  }) => {
    return (
      <Stack component="nav" id="nav-section-vertical" {...other}>
        {data.map((group, index) => (
          <Group
            key={group.subheader || index}
            subheader={group.subheader}
            items={group.items}
            slotProps={slotProps}
          />
        ))}
      </Stack>
    )
  }

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 3, mb: 3 }} />

      {/* {renderAccount} */}

      <NavSectionVertical data={MenuListData} />

      {/* {renderMenu} */}

      <Box sx={{ flexGrow: 1 }} />

      {/* {renderUpgrade} */}
    </Scrollbar>
  )

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: theme => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  )
}
