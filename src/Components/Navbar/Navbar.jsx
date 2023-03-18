import React, { Component } from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import './Navbar.css';

import { IoAccessibilitySharp, IoChatbubbles } from "react-icons/io5";

const navList = [
    { name: 'Home', url: '/', icon: <IoAccessibilitySharp /> },
    { name: 'References', url: '/references', icon: <IoChatbubbles /> },
]

function Navbar() {
    const location = useLocation();

    return (
        <>
            <nav>
                <div className="navbar">
                    <ul className="container">

                        {navList.map((nav, i) => (
                            <li key={i}
                                className={`item ${nav.url === location.pathname ? 'active' : ''}`}
                            >
                                <Link to={nav.url} className="item-link">
                                    <div className="item-icon">
                                        {nav.icon}
                                    </div>
                                    <span className="item-text">{nav.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Navbar;

