import React from 'react'
import clg1 from '../images/clg1.png'
import clg2 from '../images/clg2.png'
import clg3 from '../images/clg3.png'
import clg4 from '../images/clg4.png'
import clg5 from '../images/clg5.png'
import clg6 from '../images/clg6.png'
import clg7 from '../images/clg7.png'

export default function Campus() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={clg1} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={clg2} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={clg3} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={clg4} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={clg5} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={clg6} className="slider-img" alt="..."/>
                </div>
                </div>
                <div className="carousel-item">
                <img src={clg7} className="slider-img" alt="..."/>
                </div>
            </div>
    </>
  )
}
