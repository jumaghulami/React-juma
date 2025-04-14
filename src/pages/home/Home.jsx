import React from "react";
import Navbar from "../../shop-bike/navbar/Navbar";
import Main from "../../shop-bike/mainPage/Main";
import Footer from "../../shop-bike/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar useName="Juma Batoor" />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
