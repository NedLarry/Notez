import React from 'react';
import './Note.css';

const Note = (props) => {
    return (
        <div className="note" onClick={props.clicked}>
            <p className="title">{props.title}</p>
            <p className="date">{props.date}</p>   
        </div>
    )
}

export default Note;