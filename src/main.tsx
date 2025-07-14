import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './globalsStyle.ts'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  </BrowserRouter>,
)
