import React from 'react'
import "./Nav.css"
function Nav() {
    return (
        <div className="navbar">
            <div className="backFront">
            <i class="fas fa-chevron-left" ></i>
            <i class="fas fa-bars" ></i>
            </div>
            <h2 className="logo">White Orange</h2>
            <div  className="location">
            <i class="fas fa-map-marker-alt"></i>
            <p>Banglore</p>
            </div>
            <div className="icons">
            <i class="fas fa-search"></i>
            <i class="fas fa-shopping-cart"></i>
            <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default Nav
