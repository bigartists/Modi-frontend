import { useScrollToTop } from '@/hooks/use-scroll-to-top'
import ThemeProvider from '@/theme'
import Router from '@/routes'

export default function App() {
  // const routeList = useRoutes(routerConfig)
  // return routeList

  useScrollToTop()

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}
