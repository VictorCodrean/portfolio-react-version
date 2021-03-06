import React from "react";

function AllBtn(props) {
    return (
        <button onClick={props.onClick} data-value="allRepos" className={`btn btn-sm btn-outline-danger align-self-center`}>
            All Projects
        </button>
    );
}

export default AllBtn;