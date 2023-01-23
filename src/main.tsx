import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './contexts/ModalContext'
import { Provider } from 'react-redux'
import store from "./redux/store"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ModalProvider>

)
