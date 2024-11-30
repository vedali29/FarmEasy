"use client";

import React, { useState, useEffect, useRef } from "react";
import element1 from "../../../../public/Elements/element1.webp";
import element2 from "../../../../public/Elements/element2.webp";
import element3 from "../../../../public/Elements/element11.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const elements = [
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

const ProductCard = ({ element }) => (
  <div className="relative group overflow-hidden h-[500px]">
    <Image
      src={element.image}
      alt={element.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute flex flex-col items-center justify-center inset-x-5 pt-20">
        <h3 className="text-white text-2xl font-bold mb-1">{element.title}</h3>
        <p className="text-white text-sm text-center">{element.desc}</p>
      </div>
    
    <div
      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 flex flex-col items-center justify-center"
    >
      <Link href={element.link}>
        <button
          className="bg-green-600 text-white px-6 py-2 
          hover:bg-green-700 transition-colors duration-300"
        >
          Shop Now
        </button>
      </Link>
    </div>
  </div>
);

const SliderOfCart = () => {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="relative w-full px-4 py-16">
      {/* Mobile Slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
          }}
          className="w-full mySwiper"
        >
          {elements.map((ele, index) => (
            <SwiperSlide key={index}>
              <ProductCard element={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev" onClick={handlePrev}></div>
        <div className="swiper-button-next" onClick={handleNext}></div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-2">
        {elements.map((ele, index) => (
          <ProductCard key={index} element={ele} />
        ))}
      </div>
    </section>
  );
};

export default SliderOfCart;
