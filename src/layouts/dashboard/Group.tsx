import { useCallback, useState } from 'react'
import { NavGroupProps } from './types'
import { Collapse, ListSubheader, Stack } from '@mui/material'
import NavList from './nav-list'

function Group({ subheader, items, slotProps }: NavGroupProps) {
  const [open, setOpen] = useState(true)

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  const renderContent = items.map(list => (
    <NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
  ))

  return (
    <Stack sx={{ px: 2 }}>
      {subheader ? (
        <>
          <ListSubheader
            disableGutters
            disableSticky
            onClick={handleToggle}
            sx={{
              fontSize: 11,
              cursor: 'pointer',
              typography: 'overline',
              display: 'inline-flex',
              color: 'text.disabled',
              mb: `${slotProps?.gap || 4}px`,
              p: theme => theme.spacing(2, 1, 1, 1.5),
              transition: theme =>
                theme.transitions.create(['color'], {
                  duration: theme.transitions.duration.shortest,
                }),
              '&:hover': {
                color: 'text.primary',
              },
              ...slotProps?.subheader,
            }}
          >
            {subheader}
          </ListSubheader>

          <Collapse in={open}>{renderContent}</Collapse>
        </>
      ) : (
        renderContent
      )}
    </Stack>
  )
}

export default Group
