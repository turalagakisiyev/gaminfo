import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a>about us</a></li>
                            <li><a>our services</a></li>
                            <li><a>privacy policy</a></li>
                            <li><a>affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a >FAQ</a></li>
                            <li><a>shipping</a></li>
                            <li><a>returns</a></li>
                            <li><a>order status</a></li>
                            <li><a>payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="https://store.playstation.com/en-us/pages/latest">ps5/ps4</a></li>
                            <li><a href="https://www.xbox.com/en-US/microsoft-store">xbox</a></li>
                            <li><a href="https://store.epicgames.com/en-US/">epic games</a></li>
                            <li><a href="https://store.steampowered.com/">steam</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a><i className="fab fa-facebook-f"></i></a>
                            <a><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/aghakishiyev_?igsh=MWEwbTlidWN3eTNjZg%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/tural-aghakishiyev-3bb8b325a/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

