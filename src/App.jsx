import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "./Pages/IntroPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
