import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';
import styles from './DigitalBusinessCard.module.css';

import { FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';




export default function DigitalBusinessCard() {
    return (
        <>
            <div className="flex-column">
                <img className={styles.profilePicture} src={profilePicture} alt="Profile Picture" />
                <h1>Harald Hiemstra</h1>
                <p className="margin-0">Scrum Master & Developer</p>

                <div className="flex-row justify-content-center">
                    <a href="mailto:harald_1992@hotmail.com"><FaEnvelope /> Email</a>
                    <a href="https://www.linkedin.com/in/harald-hiemstra/" target="blank"> <FaLinkedin /> Linkedin</a>
                </div>


                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae provident asperiores! Animi expedita porro excepturi cumque, repellendus enim ea velit adipisci fugit accusantium quis possimus ad voluptatem, veniam nemo.</p>


                <h2>Interests</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae provident asperiores! Animi expedita porro excepturi cumque, repellendus enim ea velit adipisci fugit accusantium quis possimus ad voluptatem, veniam nemo.</p>


            </div>

        </>

    )
}