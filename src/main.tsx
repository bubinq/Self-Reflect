import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ModalProvider } from "./contexts/ModalContext";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ModalProvider>
  </BrowserRouter>
);
