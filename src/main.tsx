import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './contexts/ModalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalProvider>
    <App />
  </ModalProvider>

)
