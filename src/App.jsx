import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Routes, Route }  from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { AnimeProvider } from "./contexts/AnimeContext";

function App() {
  return (
    <AnimeProvider>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </AnimeProvider>
  );
}

export default App