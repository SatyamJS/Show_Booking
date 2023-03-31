import React from "react";
import {useState, useEffect } from "react";
import Card from "./card";
import Loader from "./loader";


function MainComponent(){
    const [data,setData] =useState({})
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setLoading(false)
        })
        
    },[])
    // console.log("rendered")
    let i=1;
    let cards = Array.from(data).map((data)=><Card key={i++} content={data}/>)
    return (
        <>
        <h1 style={{textAlign:"center",margin:"10px"}}>Available Shows</h1>
        {loading?<Loader />:
        <>
        <div className="content">
            {cards}
        </div>
        </>
        }
        </>
    )
}
export default MainComponent;