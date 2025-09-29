import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@rainbow-me/rainbowkit/styles.css'   // ensures CSS gets bundled in build

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)