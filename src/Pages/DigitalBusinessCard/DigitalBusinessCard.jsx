import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';
import styles from './DigitalBusinessCard.module.css';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';




export default function DigitalBusinessCard() {
    return (
        <>
            <div className="flex-column">
                <img className={styles.profilePicture} src={profilePicture} alt="Profile" />
                <h1>Harald Hiemstra</h1>
                <p className="margin-0">Scrum Master & Developer</p>

                <div className="flex-row justify-content-center">
                    <a href="mailto:harald_1992@hotmail.com"><FaEnvelope /> Email</a>
                    <a href="https://www.linkedin.com/in/harald-hiemstra/" target="blank"> <FaLinkedin /> Linkedin</a>
                </div>


                <h2>About</h2>
                <p>Hello, my name is Harald and I am a scrum master and developer, currently working at Capgemini. </p>

                <p>As a scrum master, I have mostly worked with SAFe as a framework.</p>

                <p>As a developer, I have mostly worked with Angular and a bit of react.</p>

            </div>

        </>

    )
}