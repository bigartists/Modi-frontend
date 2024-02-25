import { useState } from 'react'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import { alpha, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

import { useRouter } from 'src/routes/hooks'

import { bgGradient } from 'src/theme/css'

import Logo from 'src/components/logo'
import Iconify from 'src/components/iconify'
import { Alert } from '@mui/material'
import { login } from '@/api/auth'
import { getUsers } from '@/api/users'

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = async () => {
    try {
      console.log(email, password)
      // router.push('/')
      // const result = await login(email, password)
      const result = await getUsers()
      console.log('🚀 ~ handleClick ~ result:', result)
    } catch (error) {
      console.log('🚀 ~ handleClick ~ error:', error)
    }
  }

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          name="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  )

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Modi</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Alert severity="info" sx={{ mb: 3 }}>
            User email : <strong>admin@admin.com</strong> / password :
            <strong> admin</strong>
          </Alert>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  )
}
