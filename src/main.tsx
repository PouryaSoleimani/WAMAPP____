import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/HomePage.tsx'
import NavBarComponent from './components/templates/NavBarComponent.tsx'
import FooterComponent from './components/templates/FooterComponent.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBarComponent />
    <App />
    <FooterComponent />
  </StrictMode>,
)
