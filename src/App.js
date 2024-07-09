import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import NoPage from "./pages/Nopage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
