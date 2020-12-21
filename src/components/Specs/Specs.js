import React from 'react'
import "./Specs.css"
function Specs() {
    return (
        <div className="specs">
            <div className="specsWrapper">
                <div className="specsDetails">
                    <h4>Highlights</h4>
                    <div>
                    <p>Resolution: HD Ready 1366 x 768 Pixels</p>
                    <p>Sound Output: 20W</p>
                    <p>Refresh Rate: 50Hz</p>
                    </div>
                </div>
                <div className="specsDetails">
                    <h4>Seller</h4>
                    <div>
                    <p>White Orange, HSR</p>
                    <p className="viewMore">View more selers</p>
                    </div>
                </div>
            </div>
            <div className="specsDesc">
                <div className="specsSpacing">
                    <h5>Specifications</h5>
                    <p>+</p>
                </div>
                <div className="specsSpacing">
                    <h5>Features</h5>
                    <p>+</p>
                </div>
                <div className="specsSpacing">
                    <h5>Description</h5>
                    <p>+</p>
                </div>
            </div> 
        </div>
    )
}

export default Specs
