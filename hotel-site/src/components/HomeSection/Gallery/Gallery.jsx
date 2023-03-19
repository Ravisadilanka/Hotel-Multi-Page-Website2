import React from 'react'
import './Gallery.css'
import data from '../Gallery/data'
import Slider from "react-slick";

function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };
  return (
    <>
        <section className='collection'>
            <div className="container top">
                <Slider {...settings}>
                    {data.map((value)=> {
                        return (
                            <div className="box">
                                <img src={value.cover} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    </>
  )
}

export default Gallery