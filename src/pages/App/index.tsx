import { useScrollToTop } from '@/hooks/use-scroll-to-top'
import ThemeProvider from '@/theme'
import Router from '@/routes'
import './app.css'

export default function App() {
  useScrollToTop()

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}
