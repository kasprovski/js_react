import React from 'react';
import './Person.css'; 


const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Cześć! jestem {props.name} i mam {props.age} lat! {props.job}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;