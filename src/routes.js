import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/index";
import { Filme } from "./pages/Filme/index";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
