import React, { useState } from 'react';
import "./Navbar.css";
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "./logo2.PNG"


const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);

    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className="Navbar">
            <div onClick={scrollToTop} className="Navbar-Logo">
                <img src={Logo} alt="logo" />
            </div>

            < div className='Navbar-MenuIcon'>
                <i onClick={toggleMenu} className="fa-solid fa-bars" style={{ display: menuVisible ? "none" : "block", color: "white" }} ></i>
                <i onClick={toggleMenu} className="fa-solid fa-xmark" style={{ display: menuVisible ? "block" : "none", color: "red" }} ></i>
            </div>

            <div className="Navbar-Menu">
                <ul>
                    <li><Link to="Arthur" spy={true} smooth={true} duration={500} offset={-60}>All Games</Link></li>
                    <li><Link to="card-slider" spy={true} smooth={true} duration={500} offset={-100}>Popular Games</Link></li>
                    <li><Link to="Gaming" spy={true} smooth={true} duration={500} offset={-60}>Gaming</Link></li>
                    <li><Link to="footer" spy={true} smooth={true} duration={500} offset={-60}>About Us</Link></li>

                </ul>
            </div>

            <div className="Navbar-Menu-2" style={{ height: menuVisible ? "125px" : "0" }}>
                <ul>
                    <li><Link to="Arthur" spy={true} smooth={true} duration={500} offset={-60}>All Games</Link></li>
                    <li><Link to="card-slider" spy={true} smooth={true} duration={500} offset={-80}>Popular Games</Link></li>
                    <li><Link to="Gaming" spy={true} smooth={true} duration={500} offset={-60}>Gaming</Link></li>
                    <li><Link to="Footer" spy={true} smooth={true} duration={500} offset={-60}>About Us</Link></li>

                </ul>
            </div>

            <div style={{ marginRight: "20px" }}>
                <Link to="SearchBar" spy={true} smooth={true} duration={1000} offset={-150}>
                    <button className='Navbar-btn'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
