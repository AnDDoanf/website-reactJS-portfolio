import React from 'react'
import { Data } from './Data'
import "./testimonial.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from 'swiper'


const Testimonial = () => {
  return (
    <sections className="testimonial section" id = "testimonial">
        <h2 className="section__title"  style={{"padding-top":"100px"}}>Testimonial</h2>
        <span className="section__subtitle">People say</span>

        <Swiper className="testimonial__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination = {{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, img, title, description}) => {
                return (
                    <SwiperSlide className='testimonial__card' key = {id}>
                        <img src={img} alt="" 
                            className='testimonial__img'/>

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </sections>
  )
}

export default Testimonial