import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";


import Home from './Pages/Home/Home';
import References from './Pages/References/References';

import Navbar from './Components/Navbar/Navbar';
import ParticleCanvas from './Components/ParticleCanvas/ParticleCanvas';
import DigitalBusinessCard from './Pages/DigitalBusinessCard/DigitalBusinessCard';

function App() {
  return (
    <div className="app">
      <ParticleCanvas />


      <main>
        <div className="darkCard">

          <Routes>
            <Route path={`/`} element={<DigitalBusinessCard />}></Route>
            <Route path={`/references`} element={<References />}></Route>

            <Route path="*" element={<h2>404: Not Found</h2>}></Route>
          </Routes>
        </div>
      </main>


      <footer>
        <Navbar></Navbar>
      </footer>
    </div>
  );
}

export default App;
