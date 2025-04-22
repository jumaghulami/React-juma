import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./aboutUs/About";
import Contact from "./contactUs/Contact";
import Navbar from "./shop-bike/navbar/Navbar";
import Footer from "./shop-bike/footer/Footer";
import Services from "./shop-bike/services/Services";
import Project1 from "./project/project1/Project1";
import Project2 from "./project/project2/Project2";
import Project3 from "./project/project3/Project3";

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
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
