import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarComponent from './components/templates/NavBarComponent.tsx'
import FooterComponent from './components/templates/FooterComponent.tsx'
import { router } from './../Routes.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBarComponent />
    <RouterProvider router={router} />
    <FooterComponent />
  </StrictMode>,
)
