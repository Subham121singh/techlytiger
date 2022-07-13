import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-scroll";

export function Navbar() {
  const viewWidth = window.outerWidth;
  return (
    <div className="fix">
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Techly Tiger</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Home</li>
              </Link>
              <Link spy={true} to="Services" smooth={true}>
                <li>Services</li>
              </Link>
              <Link spy={true} to="Experience" smooth={true}>
                <li>Experience</li>
              </Link>
              <Link spy={true} to="Portfolio" smooth={true}>
                <li>Portfolio</li>
              </Link>
              {/* <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link> */}
              <Link spy={true} to="" smooth={true}>
                <li>Blogs</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to="Contact" smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        </div>
        {/* <div className="mobile-sbar">
            <Sidebar/>
          </div> */}
      </div>
      
    </div>
  );
};

