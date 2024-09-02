import React from "react";
import company1 from '../images/company1.jpeg'
import company2 from '../images/company2.jpeg'
import company3 from '../images/company3.jpeg'
import company4 from '../images/company7.jpeg'
import company5 from '../images/company5.jpeg'
import company6 from '../images/company6.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 

export default function Companies(){
    return(
        <>
        <div className="companies">
            <h1> Our Top Recruiters</h1>
            <div class="carousel">
                <div class="carousel_items">
                    <img src={company1} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company2} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company3} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company4} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company5} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company6} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company1} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company2} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company3} alt="Sensor in farmland" className="carousel_img" />
                    <img src={company4} alt="Sensor in farmland" className="carousel_img" />
                </div>
            </div>
        </div>
        </>
    )
}