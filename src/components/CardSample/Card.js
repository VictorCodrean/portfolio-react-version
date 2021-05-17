import React from 'react';
import './style.css'

function CardSample(props) {
    return (
        <>
            {props.reposToShow.map(repo => (

                <div className="col" key={repo.id}>
                    <div className="card">
                        <h5 className="card-header text-center project-title">{repo.name}</h5>
                        <img className="card-img-top" src={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/avatarImage/avatarImg.gif`} alt="repo img" />
                        <div className="card-body">
                            <h5 className="card-title">{repo.name}</h5>
                            <p className="card-text">{repo.description}</p>
                        </div>
                        <div className="card-footer">
                            <a className="link-hover" href="https://wow-envision.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ float: "left" }}>
                                <small className="text-muted">
                                    <i className="fas fa-external-link-alt"></i>
                    Deployed app</small>
                            </a>
                            <a className="link-hover" href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ float: "right" }}>
                                <small className="text-muted">
                                    <i className="fab fa-github"></i>
                    GitHub link</small>
                            </a>
                        </div>
                    </div>
                </div>
            ))}


        </>
    )
}

export default CardSample;

