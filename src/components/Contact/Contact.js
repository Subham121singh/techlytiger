import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {

    // Dark Theme
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setDone(true);
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //          setDone(true);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
      };
    

    return(
        <div className="contact-form" id="Contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode?"white":"black"}}>Get in Touch</span>
                    <span>Contact Us</span>
                    <div className="blur s-blur1" 
                    style={{background:"#ABF1FF94"}}
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="E-Mail"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button" />
                    <div>{done && "Thanks for Contacting Us.."}</div>
                    <div className="blur c-blurl"
                    style={{background:"var(--purple)"}}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;