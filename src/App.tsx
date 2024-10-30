import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Translator from "./components/Translator";
import { useTranslateContext } from "./context/TranslateContext";
function App() {
  const { language } = useTranslateContext();
  return (
    <BrowserRouter>
      <Header />
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <Translator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
