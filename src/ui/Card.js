import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
const Card = (props) => {
    return (
        <div className="card col-12 col-sm-4" style={{width: '15rem', float: 'left', padding: '2px'}}>            
            <div className="card-body">{props.logo}</div>
            <div className="card-footer">
                <button className="btn btn-dark" onClick="{props.action}">{props.title}</button>
            </div>

        </div>
    );
};

export default Card;