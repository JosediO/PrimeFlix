import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Filme from "./pages/Filme";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
