import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FaqsProvider} from './Context/FaqsContext.jsx'

createRoot(document.getElementById('root')).render(
  <FaqsProvider>
    <App />
  </FaqsProvider>
)
