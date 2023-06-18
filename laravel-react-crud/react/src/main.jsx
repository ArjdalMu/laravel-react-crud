import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="bg-gradient-to-r from-gray-700 to-blue-500   min-h-screen flex flex-col" style={{minHeight: '100vh'}}>

<React.StrictMode>
    <App />
  </React.StrictMode>,
  </div>
  
)
