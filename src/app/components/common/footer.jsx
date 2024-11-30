"use client"

import React from "react";
import Image from "next/image";
import { FaTractor, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BiSolidLeaf } from 'react-icons/bi';
import farmEasy from "../../../../public/logo.webp";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#005500] to-[#024a02]">
      <div className="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo and Social Section */}
          <div className="relative">
            <div className="flex justify-center text-black-400 sm:justify-start">
              <Image 
                src={farmEasy} 
                alt="farmEasy" 
                width={200} 
                height={100} 
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <p className="max-w-md mx-auto mt-6 text-lg leading-relaxed text-center text-white sm:max-w-xs sm:mx-0 sm:text-left">
              <FaTractor className="inline-block mr-2 text-2xl animate-bounce" />
              किसान की सेवा, हमारी प्राथमिकता
              <BiSolidLeaf className="inline-block ml-2 text-2xl text-yellow-300" />
            </p>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/+917666106969" 
              className="flex items-center justify-center gap-2 mt-6 text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full px-6 py-3 max-w-xs mx-auto sm:mx-0"
            >
              <FaWhatsapp className="text-xl" />
              किसान हेल्पलाइन
            </a>
          </div>

          {/* Main Links Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            {/* Quick Links */}
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
              <ul className="space-y-3">
                {['Fertilizers', 'Pesticides', 'Insecticides', 'Farmer Support & Training'].map((item) => (
                  <li key={item}>
                    <a href="/" className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2">
                      <BiSolidLeaf /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {['Smart Farming Solutions', 'Efficient Supply Chain Management', 'Farm Equipment Rental', 'Sustainable Agriculture'].map((item) => (
                  <li key={item}>
                    <a href="/" className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2">
                      <BiSolidLeaf /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <FaPhoneAlt className="text-yellow-300" />
                  <span>+91 200567432</span>
                </li>
                {/* <li className="flex items-center gap-3 text-white">
                  <MdEmail className="text-yellow-300" />
                  <span>vedalipawar29@gmail.com</span>
                </li> */}
                <li className="flex items-start gap-3 text-white">
                  <MdLocationOn className="text-yellow-300 text-xl" />
                  <span>Jalgaon, Maharashtra</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="text-center text-white">
            <p className="text-sm">
              © 2024 FarmEasY - सर्व हक्क राखीव
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
