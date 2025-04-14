import React from "react";
import Navbar from "../shop-bike/navbar/Navbar";
import images from "../../public/images/batoor.png";
import Footer from "../shop-bike/footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar useName="Juma Batoor" />
      <div>
        <h1>Welcome to Contact Us Page</h1>

        <div className=" flex gap-5 justify-center p-5 bg-gradient-to-b from-gray-700 to-gray-500 ">
          <img className=" rounded-2xl shadow-lg" src={images} alt="" />

          <div className="flex items-center flex-col space-y-10">
            <h1 className=" text-2xl font-bold text-gray-50 mt-10">
              Contact Me{" "}
            </h1>
            <p className="text-gray-50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus sapiente a odit earum, culpa accusantium alias,
              cupiditate placeat, provident molestiae quod? Voluptatem saepe
              dignissimos ab quae sed eligendi atque, placeat quo voluptatibus
              debitis iusto vero! Cum, assumenda quam! Quas repellendus suscipit
              dignissimos ipsam culpa iste at dolores tempora, illum odio aut
              soluta delectus quia? Dolore rem ut animi? Reprehenderit, vero
              ipsum. Vel consectetur nam, esse deleniti, dolorum dolor sunt id
              harum fugit illo maiores quas excepturi minima cumque totam?
              Accusamus voluptatibus necessitatibus deserunt ipsa, reprehenderit
              autem magni, impedit sed asperiores consequatur doloremque, ipsam
              alias molestiae. Cupiditate molestiae magnam fuga vero.
            </p>
            <form className=" border-2 border-amber-100  bg-gradient-to-br from-purple-500 to-blue-500  min-w-2xl  shadow-2xl rounded-bl-full p-20  rounded-tr-full  ">
              <h1 className="mb-5 text-center font-bold text-lg text-gray-100">
                Contact Us
              </h1>
              <div className=" flex flex-col   ">
                <div className=" flex space-x-3">
                  <label className=" font-medium text-sm mb-1 text-gray-50">
                    Name
                  </label>
                  <input
                    className="border border-pink-500 mb-5 w-full   "
                    type="text"
                  />
                </div>
                <div className=" flex space-x-3">
                  <label className=" font-medium text-sm mb-1 text-gray-50">
                    Email
                  </label>
                  <input
                    className="border border-pink-500 mb-5 w-full"
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex justify-center space-x-3">
                <p>❤️</p>
                <p>❤️</p>
                <p>❤️</p>
                <p>❤️</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
