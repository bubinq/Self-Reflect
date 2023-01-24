import "./App.css";
import { Modals } from "./components/Modals";
import { Calendar } from "./components/Calendar/Calendar";
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Modals />}></Route>
        <Route path="/review" element={<Calendar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
