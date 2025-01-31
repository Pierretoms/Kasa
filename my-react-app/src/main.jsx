import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App";
import About from "./pages/About"
import Appartements from "./pages/Appartements";
import Error from "./pages/Error";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/appartements/:id" element={<Appartements />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
