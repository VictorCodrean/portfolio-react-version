import React from 'react';
// import API from '../../utils/Api'


const Portfolio = () => {
    return (
        <>
            <div className="row my-5">
                <div className="col-sm-8 p-4 about-background">
                    <h1 className="about-header">Portfolio</h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <a href="https://ilyublinsky.github.io/group-project/index.html" target="_blank" rel="noopener noreferrer">
                                <h5 className="text-center project-title">Team project</h5>
                                <img className="img-fluid center rounded" src="assets/pictures/TravelersInsider.png"
                                    alt="Traveler's Insider Project" />
                            </a>
                        </div>
                        <div className="col-sm-6 my-2">
                            <a href="https://victorcodrean.github.io/API_Weather_Dashboard/" target="_blank" rel="noopener noreferrer">
                                <h5 className="text-center project-title">Weather Dashboard</h5>
                                <img className="img-fluid center rounded" src="assets/pictures/WeatherApp.png" alt="Weather Forecast" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <a href="https://victorcodrean.github.io/4_HW_code_quiz/" target="_blank" rel="noopener noreferrer">
                                <h5 className="text-center project-title">Quiz Game</h5>
                                <img className="img-fluid center rounded" src="assets/pictures/QuizGame.png" alt="Quiz Game" />
                            </a>
                        </div>
                        <div className="col-sm-6 my-2">
                            <a href="https://victorcodrean.github.io/5_HW_Day_Planner/" target="_blank" rel="noopener noreferrer">
                                <h5 className="text-center project-title">Day Planner</h5>
                                <img className="img-fluid center rounded" src="assets/pictures/DayPlanner.png" alt="Day Planner" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <a href="https://victorcodrean.github.io/3_HW_password_generator/" target="_blank" rel="noopener noreferrer">
                                <h5 className="text-center project-title">Password Generator</h5>
                                <img className="img-fluid center rounded" src="assets/pictures/PasswordGenerator.png"
                                    alt="Password Generator" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;