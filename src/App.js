import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import HomeAlt from "./pages/HomeAlt/HomeAlt";
import footer from "./assets/images/footer.png";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HomeAlt />} />
      </Routes>

      <footer>
        <img className="footer__img" src={footer} alt="footer" />
      </footer>
    </BrowserRouter>
  );
}

export default App;
