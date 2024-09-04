import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home";
import Notif from "./pages/notif";
import Rekomendasi from "./pages/rekomendasi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rekomendasi" element={<Rekomendasi />} />
        <Route path="/notif" element={<Notif />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
