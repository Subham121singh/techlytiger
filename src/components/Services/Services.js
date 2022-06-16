import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

import { themeContext } from "../../Context";

import { motion } from "framer-motion";
const Services = () => {
  // Theme Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Transition
  const transition = {duration:1, type:'spring'};

// Design(Cloud Management) -- GCP, AWS, Devops, 
// Remove Learn More
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{color:darkMode? "white":""}}>Our Awesome</span>
        <span>Services</span>
        {/* <span>Some text randomly written here</span>
        <br />
        <span>It's Just a dummy text for printing</span> */}
        <a href="" download>
            
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <motion.div 
        initial={{left:"25rem"}}
        whileInView={{left:"14rem"}}
        transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Cloud Management DevOps"}
            detail={"AWS, GCP"}
          />
        </motion.div>

        <motion.div 
        initial={{left:"-11rem", top:"12rem"}}
        whileInView={{left:"-4rem"}}
        transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={"Html, CSS, Javascript, React, Angular, Java, Spring Boot"}
          />
        </motion.div>

        <motion.div 
        initial={{top:"19rem", left:"25rem"}}
        whileInView={{left:"12rem"}}
        transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
