import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import MyResume from "../assets/docs/myresume.pdf";
import { GrDocumentDownload } from "react-icons/gr";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary shadow-md`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer flex">CodeSmachers</p>
        </Link>
        
        {/* Desktop & Tablet Navigation */}
        <ul className="hidden lg:flex flex-row gap-6 items-center">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.id} 
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a href={MyResume} download="Toshak-Parmar-Resume" target="_blank" rel="noreferrer">
            <button className="text-[#915EFF] font-semibold flex items-center gap-1 px-4 py-2 border border-[#915EFF] rounded-lg hover:bg-[#915EFF] hover:text-white transition duration-300">
              <GrDocumentDownload /> My Resume
            </button>
          </a>
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} absolute top-16 right-4 w-64 bg-primary rounded-lg shadow-lg p-6 z-10 flex-col`}>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} 
                    className={`${active === link.title ? "text-white" : "text-secondary"} font-medium cursor-pointer hover:text-white`} 
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <a href={MyResume} download="Toshak-Parmar-Resume" target="_blank" rel="noreferrer">
                <button className="text-[#915EFF] font-semibold flex items-center gap-1 px-4 py-2 border border-[#915EFF] rounded-lg hover:bg-[#915EFF] hover:text-white transition duration-300 w-full">
                  <GrDocumentDownload /> My Resume
                </button>
              </a>
            </ul>  
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
