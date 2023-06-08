import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CreditCardProvider } from './context/creditContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CreditCardProvider>
      <App />
    </CreditCardProvider>
  </React.StrictMode>
)
