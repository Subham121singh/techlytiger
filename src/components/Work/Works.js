import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import ReactLogo from "../../img/react-logo.png";
import AngularLogo from "../../img/AngularLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import SpringLogo from "../../img/SpringLogo.png";
import DevopsLogo from "../../img/DevopsLogo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
        <span style={{color: darkMode?"white":""}}>
          We Work With Latest Technologies
          <br/> To Provide Fast and Secure Products
          <br/> To Our Clients.
        </span>
        {/* <span>
          Some text randomly written here
          <br />
          It's Just a dummy text for printing
          <br />
          It;s just a dummy text, ipsum
          <br/>
          Lorem ispum is dummmy text here
        </span> */}

        <Link spy={true} to="Contact" smooth={true}>
          <button className="button s-button">Hire Us</button>
        </Link>
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
                  <img src={ReactLogo} alt="" title="Reactjs, Nextjs" />
              </div>
              <div className="w-secCircle">
                  <img src={AngularLogo} alt="" title="Angular, Restapi with Node, Spring"/>
              </div>
              <div className="i-secCircle">
                  <img src={DevopsLogo} alt="" title="GCP, AWS, Azure Cloud, DevOps"/>
              </div>
              <div className="w-secCircle">
                  <img src={NodeLogo} alt="" title="RestApis, Backend with Node" />
              </div>
              <div className="w-secCircle">
                  <img src={SpringLogo} alt="" title="Java, Spring, JSP"/>
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
