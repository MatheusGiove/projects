import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Champions from "./components/Champions";
import Champion from "./components/Champion";
import "./styles/App.css";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/@" element={<Champions />} />
          <Route path="/champion/:champion" element={<Champion />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
