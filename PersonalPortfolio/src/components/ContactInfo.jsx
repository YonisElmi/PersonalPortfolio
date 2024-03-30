import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import f2 from "../img/f2.png"
import t2 from "../img/t1.png"
import i2 from "../img/i2.png"
import L from "../img/L.png"
// import f from "../img/f.png"
import Button from "./Button";

const ContactInfo = () => {
    return (
        <div className="contactContianer">
            <div className="row">
               
                <div className="col1">
                    <h2>Contact Me</h2>
                    <div className="iconHandle">
                    <div className="media " id="icon">
                        <i> <FontAwesomeIcon icon={faEnvelope} /></i>
                        <span>Elmi45@gmail.com</span>
                    </div>
                    <div className="media" id="icon">
                        <i> <FontAwesomeIcon icon={faPhone} /></i>
                        <span>0616778899</span>
                    </div>
                    </div>
                    

                    <div className="media icons">
                       <img src={f2} alt="" />
                       <img src={t2} alt="" />
                       <img src={i2} alt="" />
                       <img src={L} alt="" />
                       
                    </div>
                   
                    <div className="col1Btn">
                    < Button label={"Start A Project"} />
                    </div>

                </div>
                <div className="col2">
                    <div className="form">
                        <input type="text" id="name" placeholder="Your Name" />
                        <input type="email" id="Email" placeholder="Your Email" />
                        <textarea id="Message" cols="30" rows="10" placeholder="Your Message"></textarea>

                    </div>
                    < Button label={"Submit"} />


                </div>
            </div>
        </div>
    )
}


export default ContactInfo;