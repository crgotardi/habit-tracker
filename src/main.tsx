import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router"
import router from '@/router'
import { Toaster } from 'sonner';

import './index.css'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        toastOptions={{
          classNames: {
            success: 'toaster-success',
            error: 'toaster-error'
          }
        }}
      />
    </AuthProvider>
  </StrictMode>,
)
