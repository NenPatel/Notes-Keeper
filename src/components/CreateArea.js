import React, { useState,useEffect } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import AddIcon from '@mui/icons-material/Add';
import "./CreateArea.css";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

    const [isExpand,setIsExpand] = useState(false);

    const [note,setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        })
        
    }
    function expand(){
        setIsExpand(true);
    }

    function submitNote(event){
        if(note.title && note.content)
        {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
            event.preventDefault();
        }
        else
        {
             alert("Pls fill all the Fields");
        }
        
    }

    return (
        <div className="topp">
            <form>
                {isExpand && (
                <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
                )}
                <br/>
                <textarea name="content" onClick={expand} onChange={handleChange} rows={isExpand?3:1} placeholder="Take a Note..." value={note.content}/>
                <Zoom in={isExpand}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;