import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.tsx'
import "./App.css"
import AuthPage from './pages/auth-page.tsx'
import StatusPage from './pages/status-page.tsx'
import { OnBoardingPage } from './pages/onboarding-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/status' element={<StatusPage />} />
        <Route path='/onboarding' element={<OnBoardingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
