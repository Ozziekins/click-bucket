import React from "react";
import './Status.css';

function Status(props) {
    return (
        <div className="increment-box">
            <span className="increment fadeOut"> + {props.increment} </span>
        </div>
    );
}

export default Status;