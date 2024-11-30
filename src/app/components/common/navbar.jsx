"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import farmEasy from "../../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaChartBar, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const leftNavLinks = [
    { name: "Pesticides", path: "/Pesticides" },
    { name: "Fertilizers", path: "/Fertilizers" },
    { name: "Insecticides", path: "/Insecticides" }
  ];

  const rightNavLinks = [
    { name: "SandScan", path: "/SoilSnapshot" },
    { name: "FarmGearRent", path: "/FarmGearRent" },
    { name: "Chart", path: "/Chart", icon: <FaChartBar className="w-5 h-5" /> },
    { name: "Login", path: "/Login", icon: <FaUser className="w-5 h-5" /> }
  ];

  return (
    <nav className="bg-gradient-to-r from-[#005500] to-[#024a02] fixed w-full z-50 shadow-lg">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Mobile Logo and Menu Button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={farmEasy}
                alt="FarmEasy Logo"
                width={50}
                height={50}
                className="rounded-full bg-white p-1 md:hidden border-solid-[7D5F00]"
              />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 hover:bg-green-800"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Left Links */}
          <div className="hidden md:flex space-x-4 w-1/3">
            {leftNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:flex flex-shrink-0 w-1/3 justify-center">
            <Link href="/">
              <div className="bg-white rounded-full mt-10 border-4 border-green-900"> 
              <Image
                src={farmEasy}
                alt="FarmEasy Logo"
                width={100}
                height={100}
                className="rounded-3xl p-2"
              />
              </div>
              
            </Link>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center space-x-4 w-1/3 justify-end">
            {rightNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2"
              >
                {link.icon ? (
                  <>
                    {link.icon}
                    {/* <span className="hidden lg:inline">{link.name}</span> */}
                  </>
                ) : (
                  link.name
                )}
                

              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-green-800 shadow-inner">
          {[...leftNavLinks, ...rightNavLinks].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              {link.icon && link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
