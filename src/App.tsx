import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { PrivateGuard } from "./guards/PrivateGuard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route element={<PrivateGuard />}>
          <Route path="/review" element={<Calendar />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
