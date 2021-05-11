import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'




// import {  } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <a className="navbar-brand px-2" id="about-header" href="index.html">Victor Codrean</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">Portfolio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resume
            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item " href="assets/resume.pdf" target="_blank">
                                        <FontAwesomeIcon icon={faFile} style={{ color: "red" }} />

                                        View
                Resume</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Social media
            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item " href="https://linkedin.com/in/victor-codrean" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "red" }} />
                                        LinkedIn</a>
                                    <a className="dropdown-item" href="https://github.com/VictorCodrean" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} style={{ color: "red" }} />
                                         GitHub</a>
                                    <a className="dropdown-item" href="https://twitter.com/Victor_Codrean" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} style={{ color: "red" }} />

                                        Twitter</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;