import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {

  // Motion
  const transition = {duration:2, type: 'spring'}


  // Context DarkMode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode?{color:'white'}:{color:""}}>Hy 👋 We Are</span>
          <span>Techly Tiger</span>
          <span style={{color:darkMode?"whitesmoke":"var(--gray)"}}>
            We have experience in Full Stack Software Developement, DevOps, Data Prepariton, Data Visualization, ML/AI
            model building, deployment, productionizing model and producting the Quality Work.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire Us</button>
        </Link> 
        <div className="i-icons">
            <a href="https://www.linkedin.com/in/subham121singh" target="_blank">
                <img src={LinkedIn} alt="" />
            </a>
            {/* <a href="https://www.github.com/subham121singh" target="_blank">
                <img src={Github} alt="" /> */} 
            {/* </a>*/}
            <a href="#" target="_blank">
                <img src={Instagram} alt="" />
            </a>
            
            
        </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img 
          initial={{left:'-36%'}}
          whileInView={{left:'-24%'}}
          transition={transition}
          src={glassesimoji} alt="" />

          <motion.div
          initial={{top:"-4%",left:"74%"}}
          whileInView={{top:"-4%", left:"68%"}}
          transition={{duration:2, type:"spring"}}
          // style={{top:'18rem', left:"0rem"}}
          className="floating-div"
          >
            {/* Above style causing problem in animation */}
              {/* Passing emoji as props in parameter we can also import 
              This image in FloatingDiv component and use there  */}
              {/* DarkMode Changes in Floating Div */}
              <FloatingDiv image={Crown} text1="Latest" text2="Technology"/> 
          </motion.div>
          <motion.div
          initial={{top:"18rem", left:"9rem"}}
          whileInView={{top:"18rem", left:"0rem"}}
          transition={{duration:1}}
          // Style without motion same as whileInView data
          className="floating-div"  
          >
              <FloatingDiv image={thumbup} text1="Best Design" text2=""/>
          </motion.div>
          {/* Blur Div */}
          <div className="blur" style={{background:"rgb(230 210 255)"}}></div>
          <div className="blur" style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem"
          }}></div>
      </div>
    </div>
  );
};

export default Intro;
