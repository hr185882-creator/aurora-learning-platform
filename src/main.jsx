import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Inject Tailwind CSS
const style = document.createElement('style')
style.innerHTML = `
  @import url('https://cdn.tailwindcss.com');
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', sans-serif;
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
