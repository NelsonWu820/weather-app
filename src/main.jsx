import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //strict mode just incase any bugs pop up like legacey code
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
