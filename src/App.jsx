import './App.css';
import { Route, Routes } from "react-router-dom";

// import Home from './Pages/Home/Home';
import References from './Pages/References/References';
import Navbar from './Components/Navbar/Navbar';
import ParticleCanvas from './Components/ParticleCanvas/ParticleCanvas';
import DigitalBusinessCard from './Pages/DigitalBusinessCard/DigitalBusinessCard';

import profilePicture from './Assets/LinkedinProfilePicture.jpg';
// import styles from './DigitalBusinessCard.module.css';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Career } from './Pages/Career/Career';


function App() {
  return (
    <>
      <ParticleCanvas />


      <main>
        <div className="darkCard">
          <div className="flex-column">
            <img className={"profilePicture"} src={profilePicture} alt="Profile" />
            <h1>Harald Hiemstra</h1>
            <p className="margin-0">Scrum Master & Developer</p>

            <div className="flex-row justify-content-center">
              <a href="mailto:harald_1992@hotmail.com"><FaEnvelope /> Email</a>
              <a href="https://www.linkedin.com/in/harald-hiemstra/" target="blank"> <FaLinkedin /> Linkedin</a>
            </div>

            <Routes>
              <Route path={`/`} element={<DigitalBusinessCard />}></Route>
              <Route path={`/career`} element={<Career />}></Route>

              <Route path={`/references`} element={<References />}></Route>

              <Route path="*" element={<h2>404: Not Found</h2>}></Route>
            </Routes>
          </div>
        </div>
      </main>


      <footer>
        <Navbar></Navbar>
      </footer>
    </>
  );
}

export default App;
