"use client";

import React, { useState, useEffect } from "react";
import Footer from "./common/footer";
import Navbar from "./common/navbar";
import Image from "next/image";
import Link from "next/link";
import farming1 from "../../../public/farming/farming1.jpg";
import farming2 from "../../../public/farming/farming2.jpg";
import farming3 from "../../../public/farming/farming3.jpg";
import farming4 from "../../../public/farming/farming12.jpg";
import SliderOfCart from "./common/sliderOfCart";
import element1 from "../../../public/Elements/element1.webp";
import element2 from "../../../public/Elements/element2.webp";
import element3 from "../../../public/Elements/element11.webp";

const Services = [
  {
    image: element1,
    title: "Pesticides",
    link: "/pesticides",
    desc: "Controls pests to protect crops and ensure high yields."
  },
  {
    image: element2,
    title: "Fertilizers",
    link: "/fertilizers",
    desc: "Nourishes soil with essential nutrients for healthy growth."
  },
  {
    image: element3,
    title: "Insecticides",
    link: "/insecticides",
    desc: "Kills insects that harm crops and reduces crop damage."
  }
];

const HomePage = () => {
  const images = [farming1, farming2, farming3, farming4];
  const [currentImage, setCurrentImage] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex flex-col overflow-hidden">
      <Navbar />
      <main className="main w-full">
        {/* Hero Section with Carousel */}
        <section className="relative h-screen w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                ${index === currentImage ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={img}
                alt={`Farming Display ${index + 1}`}
                fill
                priority
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
              Empowering Farmers with Innovative Solutions
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl animate-fade-in-delayed">
              Your One-Stop Shop for All Farming Needs
            </p>
            <Link href="/SoilSnapshot">
              <button
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white
                font-semibold text-lg transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-xl"
              >
                Shop Now
              </button>
            </Link>

            <div className="absolute bottom-8 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${
                      currentImage === index
                        ? "bg-white scale-125"
                        : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <SliderOfCart />
        </section>

        <section className="relative w-full mb-16 p-0">
          <div className="h-[300px] lg:h-[400px]">
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white pt-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
              Step Towards the better Tomorrow
            </h1>

           </div>
            <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            controlsList="nodownload nofullscreen noremoteplayback"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source 
              src="Videos/video1.mp4"
              type="video/mp4"/>
            </video>
          </div>
          
        </section>

        <section className="relative h-full">
          <div className="bg-[#7d5f00] h-full">
          <div className="relative h-full flex flex-col items-center text-white pt-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
              Our Servies
            </h1>
            <div className=""></div>

           </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
