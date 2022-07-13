import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";
const Sidebar = () => {
  const [click, setClick] = useState(true);
  const viewHeight = window.outerHeight;
  const viewWidth = window.outerWidth;
  console.log(viewWidth);
  return (
    <div className="sidebar">
      {click ? (
        <div
          className="h-bar"
          onClick={() => {
            setClick(!click);
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <div className="vertical" style={{width:"100vw", height:"100vh", paddingTop:"0px"}}>
          <div
            className="v-bar"
            onClick={() => {
              setClick(!click);
            }}
          >
            <div className="v"></div>
            <div className="v"></div>
            <div className="v"></div>
          </div>
          <div className="list">
            <ul className="v-bar">
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
                onClick={() => {
                  setClick(!click);
                }}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                onClick={() => {
                  setClick(!click);
                }}
              >
                <li>Services</li>
              </Link>
              <Link
                spy={true}
                to="Experience"
                smooth={true}
                onClick={() => {
                  setClick(!click);
                }}
              >
                <li>Experience</li>
              </Link>
              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                onClick={() => {
                  setClick(!click);
                }}
              >
                <li>Portfolio</li>
              </Link>
              <Link
                spy={true}
                to=""
                smooth={true}
                onClick={() => {
                  setClick(!click);
                }}
              >
                <li>Blogs</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
