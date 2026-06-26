import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Store from './pages/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Store>
    <App />
  </Store>
  
)
