import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import Link from "next/link";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    {
      !isMenuOpen? setIsMenuOpen(true) : setIsMenuOpen(false)
    }
  };

  return (
    <div
    id="home"
    className="w-full h-[15vh] flex justify-between items-center bg-yellow-900"
  >
    <h1 className="ml-5 text-[2.5rem] max-[809px]:text-[2.1rem] max-[400px]:text-[2rem] max-[400px]:ml-3 max-[350px]:text-[1.8rem] font-sans text-white font-bold">
     <span className="text-yellow-400">AR</span>EEB<span className="text-yellow-400">IX IN</span>FO
    </h1>
    <ul className="flex m-[1rem] max-[790px]:hidden">
      <Link href={"#home"}>
        <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
          Home
        </li>
      </Link>
      <Link href={"#about"}>
        <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
          About
        </li>
      </Link>
      <Link href={"#education"}>
        <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
          Education
        </li>
      </Link>
      <Link href={"#skills"}>
        <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
          Skills
        </li>
      </Link>
      <Link href={"#projects"}>
        <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
          Projects
        </li>
      </Link>
    </ul>

      {/* Mobile Menu Icon */}
      <TiThMenuOutline 
      onClick={toggleMenu} 
      className="text-[2.2rem] font-bold hidden max-[790px]:block max-[400px]:text-[1.9rem] max-[350px]:text-[1.7rem] cursor-pointer mr-5 text-white"
    />

      <div className={`${isMenuOpen ? "block" : "hidden"} w-full h-[100vh] transition-all duration-[2s] bg-yellow-400 absolute top-0 left-0`}>
    <div className="w-full h-[15vh] flex justify-end items-center bg-yellow-400 bg-opacity-40 border-b-[0.3rem] border-yellow-900">
    <ImCross onClick={toggleMenu} className="mr-6 text-2xl text-white" />
    </div>
  
    <ul className="flex justify-center items-center flex-col">

      <Link href={"#home"}>
      <li className="w-full h-[15vh] flex justify-center items-center font-bold text-yellow-900 border-b-[0] border-white my-1 text-2xl font-sans">HOME</li>
      </Link>
      <Link href={"#about"}>
      <li className="w-full h-[15vh] flex justify-center items-center font-bold text-yellow-900 border-b-[0] border-white my-1 text-2xl font-sans">ABOUT</li>
      </Link>
      <Link href={"#education"}>
      <li className="w-full h-[15vh] flex justify-center items-center font-bold text-yellow-900 border-b-[0] border-white my-1 text-2xl font-sans">EDUCATION</li>
      </Link>
      <Link href={"#skills"}>
      <li className="w-full h-[15vh] flex justify-center items-center font-bold text-yellow-900 border-b-[0] border-white my-1 text-2xl font-sans">SKILLS</li>
      </Link>
      <Link href={"#projects"}>
      <li className="w-full h-[15vh] flex justify-center items-center font-bold text-yellow-900 border-b-[0] border-white my-1 text-2xl font-sans">PROJECTS</li>
      </Link>
    </ul>
      </div>

    </div>
  );
};

export default Header;
