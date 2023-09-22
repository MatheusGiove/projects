import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Lista from "./Pages/Home/Lista";
import { Series } from "./Pages/Home/Series";
import Filmes from "./Pages/Home/Filmes";
import Trending from "./Pages/Home/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="series" element={<Series />} />
          <Route path="filmes" element={<Filmes />} />
          <Route path="trending" element={<Trending />} />
          <Route path="list" element={<Lista />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
