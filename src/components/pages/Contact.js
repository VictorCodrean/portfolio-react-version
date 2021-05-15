import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="container">


            <div className="row my-5 mx-2">
                <div className="col-sm-8 about-background p-4">
                    <h1 className="about-header">Contact</h1>
                    <hr />

                    <div className="row">
                        <div className="col-sm-3">
                            <p className="info-header mb-0">
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
                                Name</p>
                            <p>Victor Codrean</p>

                            <p className="info-header mb-0">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 8 }} />
                               Location</p>
                            <p>Seattle</p>
                        </div>

                        <div className="col-sm-6">
                            <p className="info-header mb-0">
                                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: 8 }} />
                                Phone number</p>
                            <p className="profile-text" id="profile-phone">+1 206 939-0557</p>

                            <p className="info-header mb-0">
                                Email
            </p>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8 }} />
                            <a href="mailto: CodreanVictor@gmail.com" target="_blank" rel="noopener noreferrer">CodreanVictor@gmail.com</a>

                            <p className="info-header mb-0">Github
            </p>
                            <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />
                            <a href="https://github.com/VictorCodrean" target="_blank" rel="noopener noreferrer">https://github.com/VictorCodrean</a>

                            <p className="info-header mb-0">
                                LinkedIn
                            </p>
                            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: 8 }} />

                            <a href="https://www.linkedin.com/in/victor-codrean/"
                                target="_blank" rel="noopener noreferrer">

                                https://www.linkedin.com/in/victor-codrean/</a>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;