
import React from "react";


function NoMatch() {
    return (

        <div className="container-fluid bg-dark text-light p-5">
            <div className="container bg-dark p-5">
                <h1 className="display-4">Welcome to my Website</h1>
                <hr />
                <h1>ERROR 404: Page Not Found</h1>
                <a href="/">Click here</a>
                <span>to go back to the home page</span>
            </div>
        </div>

    )
}

export default NoMatch;