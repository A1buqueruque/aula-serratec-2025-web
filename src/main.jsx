import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { Router } from './routes/Router.jsx'

import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <Router/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
