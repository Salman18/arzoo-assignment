import React from 'react'
import "./ProductHeadingPrice.css"

function ProductHeadingPrice() {
    return (
        <div className="headingWrapper">
            <h4>LG R202F 80cm (32 inch) HD Ready LED TV <span>(KLV-32R02F)</span></h4>
            
            <div className="starsAndPrice">
            <p className="stars">
                <span>&#9733;&#9733;&#9733;&#9733;</span> 4608 Reviews
            </p>
                <div className="price">
                    <h1>₹89,999</h1>
                    <strike>₹98,999</strike>
                    <h2>35%</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductHeadingPrice
