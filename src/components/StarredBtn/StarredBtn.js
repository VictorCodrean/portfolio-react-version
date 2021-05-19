import React from "react";

function StarredBtn(props) {
    return (
        <button onClick={props.onClick} data-value="starredRepos" className={`btn btn-sm btn-outline-success align-self-center`}>
            Pinned projects
        </button>
    );
}

export default StarredBtn;