import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Galeri from "./components/Galeri";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeri" element={<Galeri />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
