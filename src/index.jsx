import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/reset.css';
import './assets/styles/variables.css';
import './assets/styles/global.css';
import Main from './Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
