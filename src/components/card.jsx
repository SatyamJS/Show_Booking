import React from "react";
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Card(props){
    try{

        var image =props.content.show.image.medium
    }catch{
        var image=""
    }
    const navigate = useNavigate();
    const createPost = () => {
        navigate('/details',
            {
                state: {
                    data:props.content.show
                }
            });
    }
    return (
        <>
        <div className="card">
            <img className="cardImage"src={image} alt="Image Not found" />
            <div className="cardDetails">
            <span><strong style={{color:"red"}}>Title:</strong>{props.content.show.name}</span>
            <span><strong style={{color:"red"}}>Languages:</strong>{props.content.show.language}</span>
            <span><strong style={{color:"red"}}>Type:</strong>{props.content.show.type}</span>
            <span><strong style={{color:"red"}}>Genre:</strong>{props.content.show.genres.join(", ")}</span>
            <span><strong style={{color:"red"}}>Ratings:</strong>{props.content.show.rating.average?props.content.show.rating.average:"No Information"}</span>
            <span><strong style={{color:"red"}}>First Premiered:</strong>{props.content.show.premiered?props.content.show.premiered:"No Information"}</span>
            </div>
            
           <button className="btn" onClick={()=>{createPost()}}>Read More</button>

        </div>
        </>
    )
}
export default Card;