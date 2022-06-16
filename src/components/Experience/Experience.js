import React, { useContext } from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="experience" id="Experience">
            <div className="achievement">
                {/* DarkMode Code Change */}
                <div className="circle" style={{color:darkMode?'var(--orange)':""}}>3+</div>
                <span style={darkMode?{color:'white',fontWeight:"bold"}:{color:""}}>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievement" >
                <div className="circle" style={{color:darkMode?'var(--orange)':""}}>20+</div>
                <span style={darkMode?{color:'white',fontWeight:"bold"}:{color:""}}>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color:darkMode?'var(--orange)':""}}>5+</div>
                <span style={darkMode?{color:'white',fontWeight:"bold"}:{color:""}}>Clients</span>
                <span>Helped</span>
            </div>
        </div>
    )
}

export default Experience;