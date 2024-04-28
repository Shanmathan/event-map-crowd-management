// Importing necessary modules and components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "./pages/IntroPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling
import Map from "./components/Map.jsx";

// App component
function App() {
  return (
    // BrowserRouter wraps the Routes component to provide routing functionality
    <BrowserRouter>
      {/* Routes component defines the different routes in the application */}
      <Routes>
        {/* Route for the root ("/") path, renders the IntroPage component */}
        <Route path="/" element={<IntroPage />} />
        {/* Route for the "/map" path, renders the Map component */}
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
