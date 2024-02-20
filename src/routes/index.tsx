import Page404 from '@/pages/Page404'
import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import LoginPage from '@/pages/Login'
import DashboardLayout from 'src/layouts/dashboard'

export const Main = lazy(() => import('@/pages/Main'))

export const MainPage = lazy(() => import('@/pages/Main'))

export const BlogPage = lazy(() => import('@/pages/Blog'))
export const UserPage = lazy(() => import('@/pages/User'))
export const ProductsPage = lazy(() => import('@/pages/Products'))

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: 'user',
          element: <UserPage />,
        },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        {
          path: 'app',
          children: [
            {
              element: <UserPage />,
              index: true,
            },
            { path: 'one', element: <UserPage /> },
            { path: 'two', element: <BlogPage /> },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
  return routes
}
