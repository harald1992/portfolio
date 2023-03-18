import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";


import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import References from './Components/References/References';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar></Navbar>
      </header>

      <Routes>
        <Route path={`/`} element={<Home />}></Route>
        <Route path={`/references`} element={<References />}></Route>

        <Route path="*" element={<h2>404: Not Found</h2>}></Route>
      </Routes>

    </div>
  );
}

export default App;
