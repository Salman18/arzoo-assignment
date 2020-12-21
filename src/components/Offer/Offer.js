import React from 'react'
import "./Offer.css"
function Offer() {
    return (
        <div className="offerWrapper">
            <div className="availableOffer">
            <h5>Available Offers</h5>
            <p>Bank Offer10% Instant Discount with HDFC Bank Credit</p>
            <p>Cards and Credit/Deebit EMI Transactions <span>T & C</span></p>
            <p>Bank Offer10% Instant Discount with HDFC Bank Debit Card transtions <span>T & C</span></p>
            <p>View 4 more offers</p>
            </div>
            <div className="warranty">
                <p>1 year manufacture warranty</p>
                <div className="pincode">
                <h5>Delivery</h5>
                <input type="text" placeholder="Enter pincode"/>
                <i class="fas fa-chevron-circle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Offer
