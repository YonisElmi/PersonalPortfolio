import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faCode, faCrop, faAppleAlt, faAppleWhole } from '@fortawesome/free-solid-svg-icons'

const SkillsInfo = () => {
    return(
        <div className="skillContainer">
            <h2>My Skills</h2>

            <div className="skillCards">
                <div className="skillCard">
               <i> <FontAwesomeIcon icon={faCode} /></i>
               
                 <h2>Web Design</h2>
                 <p>With expertise in HTML, CSS, and JavaScript, I excel in developing responsive and visually appealing web applications.s</p>
                </div>
                <div className="skillCard">
                  <i> <FontAwesomeIcon icon={faCrop} /></i>
                 <h2>UI/UX Desing</h2>
                 <p>With a keen eye for user experience (UX) design principles and a strong understanding of user interface (UI) design. </p>
                </div>
                <div className="skillCard">
                  <i> <FontAwesomeIcon icon={faAppleWhole} /></i>
                 <h2>Mobile App</h2>
                 <p>Proficient in developing mobile applications for both Android and iOS platforms, I leverage my expertise in languages such as Java, Kotlin, Swift. </p>
                </div>
                

            </div>
          
        </div>
    )
}

export default SkillsInfo;