import React,{useState} from "react";
import img1 from '../img/A2.jfif';
const BioInfo = () => {

    const [toggleState , setToggle] = useState(1)
    const toggleTab = (id) => {
     setToggle(id)
    }

    console.log(toggleState)
    return(
        <div className="bioContianer">
            <div className="bioInfo">
                <div className="img">
                <img src={img1} alt="" />
                </div>

                <div className="text">
                    <h2>About Me</h2>
                    <p>As a junior developer, I am driven by an insatiable curiosity and a passion for problem-solving within the ever-evolving landscape of technology. With a solid foundation in programming languages such as Java, Python, and JavaScript, coupled with a keen eye for detail, I am committed to delivering high-quality solutions that meet both user needs and business objectives. Continuously seeking to expand my skill set, I thrive in collaborative environments where I can learn from experienced professionals while contributing fresh perspectives and innovative ideas.</p>
                <div className="tabs">
                   <p className={ toggleState === 1 ? "tabLink activeTab" :"tabLink"} onClick={()=>toggleTab(1)}>Skills</p>
                   <p className={ toggleState === 2 ? "tabLink activeTab" :"tabLink"}   onClick={()=>toggleTab(2)}>Experiance</p>
                    <p className={ toggleState === 3 ? "tabLink activeTab" :"tabLink"}  onClick={()=>toggleTab(3)}>Education</p>
                </div>
                
                <div className={toggleState === 1 ? "content activeContent" : "content"}>
                    <span>UI/UX</span> 
                    <h4>Web/App interfaces</h4>
                    <span>Web Development</span><br />
                    <h4> WebA pp Development</h4>
                   <span>App Development</span> Building
                   <h4>Andriod/IOS Apps</h4> 
                </div>
                <div className={toggleState === 2 ? " content activeContent" : "content"}>
                    <span>2022 - Current</span> 
       
                    <h4>UI/UX Designing at training at SOMTAC</h4>
                    <span>2020 - 2021</span><br />
                    <h4> Team head Start Up Business</h4>
                   <span>2019 - 2020</span> Building
                   <h4>Teacher at Momps</h4> 
                </div>
                <div className={toggleState === 3 ? "content activeContent" : "content"}>
                    <span>2021</span> 
                    <h4>Graduated Secondry at HowlWadag School</h4>
                    <span>2022</span><br />
                    <h4>UI/UX Designing at training at SOMTAC</h4>
                   <span>2021 - Current</span> Building
                   <h4>Undergraduated at Jumhuriya University(JUSt)</h4> 
                </div>

                </div>

               
                
               
            </div>
          
        </div>
    )
}

export default BioInfo;