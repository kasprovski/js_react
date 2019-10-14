import React from 'react';
import './Osoby.css'; 

const osoby = ( props ) => {
    return (
        <div className="Osoby">
            <p onClick={props.click}>Cześć! jestem {props.name} ale w każdym momencie możesz zmienić moje imię</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default osoby;