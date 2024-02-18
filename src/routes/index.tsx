import Page404 from '@/pages/Page404'
import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import LoginPage from '@/pages/Login'
import DashboardLayout from 'src/layouts/dashboard'

export const Main = lazy(() => import('@/pages/Main'))
export const Draw = lazy(() => import('@/pages/Draw'))
export const Home = lazy(() => import('@/pages/Home'))
export const Preview = lazy(() => import('@/pages/Preview'))

// export const IndexPage = lazy(() => import('@/pages/app'))
export const IndexPage = lazy(() => import('@/pages/App'))

export const BlogPage = lazy(() => import('@/pages/Blog'))
export const UserPage = lazy(() => import('@/pages/User'))
// export const ProductsPage = lazy(() => import('src/pages/products'))

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/draw',
          element: <Draw />,
        },
        {
          path: '/preview',
          element: <Preview />,
        },
      ],
    },

    {
      path: '/admin',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        { element: <Navigate to="user" />, index: true },
        {
          path: 'user',
          element: <UserPage />,
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" /> },

    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ])
  return routes
}
