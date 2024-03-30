import React from "react";
 import quran from '../img/QuranAppClone.png'
 import Ecomerce from '../img/e.png'
 import note from '../img/NoteApp.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

const ProjectInfo = () => {
    return(
        <div className="projectContainer">
            <div className="cards">
                <div className="card">
                    <div className="img">
                    <img src={quran} alt="" />
                    </div>
                    <div className="text">
                        <h2>Quran Clone</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores enim cumque consequuntur quam voluptatibus minima officia, ab obcaecati adipisci.</p>
                        <div className="view">
                        <a href="#">View In Github <i> <FontAwesomeIcon icon={faUpRightFromSquare} /></i></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                    <img src={ Ecomerce} alt=""  className="imgNote"/>
                    </div>
                    <div className="text">
                        <h2>Quran Clone</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores enim cumque consequuntur quam voluptatibus minima officia, ab obcaecati adipisci.</p>
                        <div className="view">
                        <a href="#">View In Github <i> <FontAwesomeIcon icon={faUpRightFromSquare} /></i></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                    <img src={note} alt="" />
                    </div>
                    <div className="text">
                        <h2>Quran Clone</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores enim cumque consequuntur quam voluptatibus minima officia, ab obcaecati adipisci.</p>
                        <div className="view">
                        <a href="#">View In Github <i> <FontAwesomeIcon icon={faUpRightFromSquare} /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;