import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
export default function useRouteElements() {
  const element = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/test',
      element: <ProductList />
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />{' '}
        </RegisterLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    }
  ])

  return element
}
