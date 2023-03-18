import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";

export default function App() {


  return (
<StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
          </Routes>

      </BrowserRouter>
    </StrictMode>
  )
}

