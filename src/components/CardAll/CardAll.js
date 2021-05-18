import React from 'react';

function CardSampleAll(props) {
    return (
        <>
            {props.reposToShow.map(repo => (
                <div className="col" key={repo.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">

                                <h6 className=" text-center project-title">
                                    {repo.name}
                                    <i className="fas fa-external-link-alt" style={{ paddingLeft: "8px" }}></i>
                                </h6>

                            </a>
                            <p className="card-text">{repo.description}</p>
                        </div>
                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item">
                                Predominant language:
                                <span className="text-success bg-warning" style={{ marginLeft: "8px" }}>
                                    {repo.language}
                                </span>
                            </li>
                            <li className="list-group-item" style={{ fontSize: "small" }}>
                                Date Created: {repo.created_at}
                            </li>
                        </ul>


                    </div>

                </div>

            ))}


        </>
    )
}

export default CardSampleAll;

