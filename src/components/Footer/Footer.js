import React from "react";
import "./style.css"

function Footer(props) {
    return (
        <footer className="fixed-bottom footer mt-autp footer-btm text-center ">
            <ul className="list-unstyled  pt-3">
                <li className="list-inline-item" style={{ marginRight: "5rem" }}>
                    <a href="https://www.linkedin.com/in/victor-codrean/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin font-icons mr-2" style={{ paddingRight: "10px" }}></i>
          Linked in</a>
                </li>
                <li className="list-inline-item" style={{ marginRight: "5rem" }}>
                    <a href={props.githubUrl} target="_blank" rel="noopener noreferrer"><i className="fab fa-github font-icons" style={{ paddingRight: "10px" }}></i> GitHub</a>
                </li>
                <li className="list-inline-item">
                    <p className="pb-0 mb-0">© {props.fullName} 2021 </p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;