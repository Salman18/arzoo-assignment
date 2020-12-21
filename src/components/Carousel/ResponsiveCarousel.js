import React from 'react'
import "./ResponsiveCarousel.css"
import image1 from "../../Images/tv-image1.jpg"
import image2 from "../../Images/tv-image2.jpg"
import image3 from "../../Images/tv-image3.jpg"
import image4 from "../../Images/tv-image4.jpg"
import image5 from "../../Images/tv-image5.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

function ResponsiveCarousel() {
    return (
        <div className="CarouselWrapper">
             <Carousel>
                <div className="imgStyles">
                    <img src={image1} alt="television"/>
                </div>
                <div className="imgStyles">
                    <img src={image2} alt="television"/>
                </div>
                <div className="imgStyles">
                    <img src={image3} alt="television"/>
                </div>
                <div className="imgStyles">
                    <img src={image4} alt="television"/>
                </div>
                <div className="imgStyles">
                    <img src={image5} alt="television"/>
                </div>
            </Carousel>
        </div>
    )
}

export default ResponsiveCarousel
