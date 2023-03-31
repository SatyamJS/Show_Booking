import React from "react";
function Navbar(){
    return (
        <>
        <div className="navbar">
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <span>Satyam Gupta</span>

            </div>
            <div className="navlinks">
                <span>Home</span>
                <span>About </span>
                <span> Latest</span>

            </div>
            <div className="searchBar">
                <input type="search" />
                <button className="btn">Search</button>

            </div>
        </div>
        </>
    )
}
export default Navbar;