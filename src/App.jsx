import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./aboutUs/About";
import Contact from "./contactUs/Contact";
import Navbar from "./shop-bike/navbar/Navbar";
import Footer from "./shop-bike/footer/Footer";
import Services from "./shop-bike/services/Services";

function App() {
  return (
    <>
      <div className="">
        <Navbar useName="Juma Batoor" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
