import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


function DetailPage(props) {
    const { state } = useLocation();
    const [formViewer, setFormViewer] = useState(false)
    const [input, setInput] = useState({})
    const handleClick = () => {
        setFormViewer(true)
        window.scrollTo(0, 0)
    }
    const handleChange = (event) => {
        setInput(prev => {
            return ({ ...prev, [event.target.name]: event.target.value })
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("data", JSON.stringify(input))
        alert(JSON.stringify(input))
    }
    try {
        var image = state.data.image.medium
    } catch {
        var image = ""
    }
    return (
        <>...
            {formViewer ?
                <>
                    <div className="form">
                        <span><strong style={{ color: "red" }}>  Movie Name</strong>: {state.data.name}</span> <span ><strong style={{ color: "red" }}>Runtime </strong>: {state.data.runtime + "min"}</span>
                        <form onSubmit={handleSubmit} >
                            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={input.name || ""} />
                            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={input.email || ""} />
                            <input type="datetime-local" placeholder="Choose Slot" name="dateTime" onChange={handleChange} value={input.dateTime || ""} />
                            <button className="btn">Book</button>
                        </form>
                    </div>

                </>
                :
                ""}

            <div className="summaryDiv">
                <div className="topBtnDiv">

                    <Link to="/"><button className="btn">Back to Home</button></Link>
                </div>
                <div className="header">
                    <img src={image} alt="Image not found" />
                    <div className="cardDetails">
                        <span><strong>Title:</strong>{state.data.name}</span>
                        <span><strong>Languages:</strong>{state.data.language}</span>
                        <span><strong>Type:</strong>{state.data.type}</span>
                        <span><strong>Genre:</strong>{state.data.genres.join(", ")}</span>
                        <span><strong>Ratings:</strong>{state.data.rating.average}</span>
                        <span><strong>First Premiered:</strong>{state.data.premiered}</span>
                    </div>
                    <div className="summary" dangerouslySetInnerHTML={{__html:state.data.summary}}>
                    </div>
                </div>

                <div className="ticketBookBtn">
                    <button className="btn" onClick={handleClick}>Book Ticket</button>
                </div>
            </div>



        </>
    )
}
export default DetailPage;