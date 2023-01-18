import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './contexts/ModalContext'
import { UserInputProvider } from './contexts/UserInput'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalProvider>
    <UserInputProvider>
      <App />
    </UserInputProvider>
  </ModalProvider>

)
