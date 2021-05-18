import React from "react";

function AllBtn(props) {
    return (
        <button onClick={props.onClick} data-value="allRepos" className={`btn btn-sm btn-outline-warning align-self-center`}>
            All Repos
        </button>
    );
}

export default AllBtn;