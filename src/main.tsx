import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@splidejs/splide/dist/css/splide.min.css'
import 'aos/dist/aos.css'
import '../assets/style/default.css'
import '../assets/style/index.css'
import '../assets/style/media-query.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
