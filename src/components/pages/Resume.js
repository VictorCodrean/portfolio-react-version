import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    return (
        <>

            {/* <a className="dropdown-item " href="resume.pdf" target="_blank">
                    <FontAwesomeIcon icon={faFile} style={{ marginRight: 10 }} />
                                        View
                Resume</a> */}
            <div className="container mt-5" style={{ paddingBottom: "150px" }} >
                <div className="row about-background mx-2" >

                    <div className="d-flex justify-content-between">
                        <h1 className="about-header ml-auto px-3 mt-4 mb-0 pb-0">Resume</h1>
                        <a className="mr-auto mt-3" href="resume.pdf" target="_blank">
                            <FontAwesomeIcon icon={faFile} style={{ marginRight: 10 }} />
                                        View Resume
                            </a>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <hr />
                        <p>
                            &nbsp;Currently Learning Web Development. Web dev is a fun, creative experience.
                     </p>
                        <h3 className="about-header mb-4" style={{ paddingTop: "32px" }}>Experience</h3>
                        <ul>
                            <li>
                                <strong>Astoria Construction</strong>, Bellevue, WA — Field Crew Supervisor
                                <br />
                                <p className="px-4 pt-2">
                                    Jan 2020 - PRESENT
                                </p>

                            </li>
                            <hr />
                            <li>
                                <strong>Astoria Construction</strong>, Bellevue, WA — Residential Roofer

                                <br />
                                <p className="px-4 pt-2">
                                    May 2018 - Jan 2020
                                </p>

                            </li>
                            <hr />
                            <li>
                                <strong>VeCSaR-hauler</strong>, Chicago, IL — Driver
                                <br />
                                <p className="px-4 pt-2">
                                    March 2017- March 2018
                                </p>
                            </li>
                        </ul>
                        <h3 className="about-header mb-4" style={{ paddingTop: "32px" }}>Education</h3>
                        <ul>
                            <li>
                                <strong>University of Washington</strong>, Bellevue, WA — Full Stack Web Development
                                <br />
                                <p className="px-4 pt-2">
                                    Dec 2020 - PRESENT
                                </p>
                            </li>
                            <hr />
                            <li>
                                <strong>Technical University of Moldova</strong>, Moldova — Civil Engineer
                                <br />
                                <p className="px-4 pt-2">
                                    Sept 2013 - May 2016
                                </p>
                            </li>
                            <hr />
                        </ul>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <h3 className="about-header mb-4" style={{ paddingTop: "32px" }}>Skills:</h3>
                        <ul>
                            <li>
                                Safety and compliance
                            </li>
                            <li>
                                Work ethic
                            </li>
                            <li>
                                Blueprints and schematics
                            </li>
                            <li>
                                Residential construction
                            </li>
                            <li>
                                Maintenance & Repair
                            </li>
                        </ul>
                        <h3 className="about-header mb-4" style={{ paddingTop: "32px" }}>Technical Skills:</h3>
                        <ul>
                            <li>
                                Web Development:
                                <ul>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        Node JS (npm packages)
                                    </li>
                                    <li>
                                        SQL
                                    </li>
                                    <li>
                                        NoSQL(Mongo)
                                    </li>
                                    <li>
                                        Heroku
                                    </li>
                                    <li>
                                        React
                                    </li>
                                </ul>
                            </li>
                            <li>Learning...</li>
                        </ul>
                        <h3 className="about-header mb-4" style={{ paddingTop: "32px" }}>Languages:</h3>
                        <ul>
                            <li>
                                English
                            </li>
                            <li>
                                Romanian
                            </li>
                            <li>
                                Russian
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;