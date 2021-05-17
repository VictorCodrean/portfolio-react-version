import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">


            <div className="navbar-brand my-0 mx-4" id="about-header">
                <Link to="/" className="nav-link" id="header-color">
                    Victor Codrean
                             </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                             </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                             </Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                             </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resume
            </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item " href="resume.pdf" target="_blank">
                                <FontAwesomeIcon icon={faFile} style={{ marginRight: 10 }} />
                                        View
                Resume</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Social media
            </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="https://linkedin.com/in/victor-codrean" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: 8 }} />
                                        LinkedIn</a>
                            <a className="dropdown-item" href="https://github.com/VictorCodrean" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />
                                         GitHub</a>
                            <a className="dropdown-item" href="https://twitter.com/Victor_Codrean" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} style={{ marginRight: 8 }} />

                                        Twitter</a>
                            <a className="dropdown-item" href="mailto: CodreanVictor@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8 }} />
                                Send Email</a>
                            <a className="dropdown-item phone-number" href="tel: 206-939-0557" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: 8 }} />
                                Call</a>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;