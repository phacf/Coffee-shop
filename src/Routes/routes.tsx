import { lazy } from 'react'

const Products = lazy(() => import('@pages/Products').then((module) => ({ default: module.Products })))
const Cart = lazy(() => import('@pages/Cart').then((module) => ({ default: module.Cart })))

import ErrorPage from './Error'
import { STORE_ROUTES } from './names'

export default [
  {
    path: STORE_ROUTES.MAIN,
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: STORE_ROUTES.CART,
    element: <Cart />,
  },
]
