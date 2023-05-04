import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

import { IoAccessibilitySharp, IoChatbubbles } from "react-icons/io5";

const navList = [
    { name: 'About', url: '/', icon: <IoAccessibilitySharp /> },
    { name: 'Career', url: '/career', icon: <IoChatbubbles /> },
]

function Navbar() {
    const location = useLocation();

    return (
        <>
            <nav>
                <div className="navbar darkCard">
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

