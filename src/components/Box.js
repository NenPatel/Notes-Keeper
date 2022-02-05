import React from "react";
import "./Box.css"; 
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Box(props)
{

function handleClick(){
    props.delete(props.id);
}

    return(
        <div className="top">
        <div className="Box">
            
            <p style={{fontWeight:"bold"}}>{props.title}</p>
            <p>{props.content}</p>
            
        </div>
        <Fab onClick={handleClick} className="delete"><DeleteIcon /></Fab>
        </div>
    );
}

export default Box;