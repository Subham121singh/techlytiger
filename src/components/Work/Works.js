import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

import { themeContext } from "../../Context";

import { motion } from "framer-motion";

// Technologies
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        {/* <span style={{color: darkMode?"white":""}}>Works For All These</span> */}
        <span></span>
        <span>Our Tech Stack</span>
        <span>
          Some text randomly written here
          <br />
          It's Just a dummy text for printing
          <br />
          It;s just a dummy text, ipsum
          <br/>
          Lorem ispum is dummmy text here
        </span>

        <button className="button s-button">Hire Me</button>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
          <motion.div 
          initial={{rotate:90}}
          whileInView={{rotate:0}}
          viewport={{margin:"-44px"}}
          transition={{duration:3, type:"spring"}}
          className="w-mainCircle">
              <div className="w-secCircle">
                  <img src={Upwork} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Fiverr} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Amazon} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Shopify} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Facebook} alt="" />
              </div>
          </motion.div>
          {/* Background Circle */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
