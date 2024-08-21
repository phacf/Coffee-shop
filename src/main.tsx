import { Header, Loading } from '@components'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider } from 'react-router-dom'

import { router } from './Routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <Header />
      <Outlet />
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
