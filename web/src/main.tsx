import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.tsx'
import "./App.css"
import AuthPage from './pages/auth-page.tsx'
import StatusPage from './pages/status-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/status' element={<StatusPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
