import React from 'react';
import './style.css'

function CardSample(props) {
    return (
        <>
            {props.reposToShow.map(repo => (

                <div className="col " key={repo.id}>
                    <div className="card h-100 ">
                        
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <h5 className="card-header text-center project-title">{repo.name}</h5>
                        </a>
                        <img className="card-img-top" src={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/avatarImg/avatarImg.gif`} alt="repo img" />
                        <div className="card-body">
                            <h5 className="card-title">{repo.name}</h5>
                            <p className="card-text">{repo.description}</p>
                        </div>
                        <div className="card-footer">

                            {/* {
                                repo.homepage === null ?
                                    <a className="link-hover" href={`https://victorcodrean.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer" style={{ float: "left", textDecoration: "none" }}>
                                        <small className="text-muted" style={{ fontSize: "15px" }}>
                                            <i className="fas fa-external-link-alt" style={{ paddingRight: "8px" }}></i>
                    Deployed app</small>
                                    </a> :
                                    <small className="text-muted" style={{ fontSize: "12px" }}>
                                        <i className="fas fa-external-link-alt" style={{ paddingRight: "8px" }}></i>
                                    link on repo page
                                    </small>

                            } */}

                            {/* <a className="link-hover" href="https://wow-envision.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ float: "left", textDecoration: "none" }}>
                                <small className="text-muted">
                                    <i className="fas fa-external-link-alt" style={{ paddingRight: "8px" }}></i>
                    Deployed app</small>
                            </a> */}
                            <a className="link-hover d-flex justify-content-center" href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <small className="text-muted" style={{fontSize: "24px"
                                }}>
                                    <i className="fas fa-external-link-alt" style={{ paddingRight: "8px" }}></i>
                    GitHub link
                    <i className="fab fa-github" style={{ paddingLeft: "8px" }}></i>
                                </small>

                            </a>
                        </div>
                    </div>
                </div>
            ))}


        </>
    )
}

export default CardSample;

